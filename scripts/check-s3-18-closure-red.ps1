[CmdletBinding()]
param(
  [ValidateSet('Red', 'Green')][string]$Mode = 'Green',
  [string]$RepositoryRoot = (Get-Location).Path,
  [switch]$CheckCurrentCommitState
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
$ExpectedRoot = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '..')).Path
$ExpectedIds = @('ai-engineering', 'data-engineering', 'data-ai-platforms', 'architecture-governance', 'cloud-integration', 'delivery-technical-leadership')

function Test-RepositoryRoot([string]$Candidate) {
  if ([string]::IsNullOrWhiteSpace($Candidate) -or -not [System.IO.Path]::IsPathRooted($Candidate)) { return $false }
  try { $resolved = (Resolve-Path -LiteralPath $Candidate -ErrorAction Stop).Path } catch { return $false }
  return [string]::Equals($resolved, $ExpectedRoot, [System.StringComparison]::OrdinalIgnoreCase)
}

function Test-ExactCommitState([string[]]$Staged, [string[]]$Unstaged, [string[]]$Untracked) {
  return $Staged.Count -gt 0 -and $Unstaged.Count -eq 0 -and $Untracked.Count -eq 0
}

function Assert-RedGates {
  $rootCases = @(
    @('relative selector', '.', $false), @('absolute selector', $ExpectedRoot, $true),
    @('wrong-root selector', (Join-Path ([System.IO.Path]::GetTempPath()) 's3-18-not-this-repository'), $false), @('missing-root selector', '', $false)
  )
  foreach ($case in $rootCases) { if ((Test-RepositoryRoot $case[1]) -ne $case[2]) { throw "Repository-root gate failed for $($case[0])." } }
  $commitCases = @(
    @('staged-only', @('docs/index.html'), @(), @(), $true), @('dirty-worktree', @('docs/index.html'), @('docs/es/index.html'), @(), $false), @('empty-index', @(), @(), @(), $false)
  )
  foreach ($case in $commitCases) { if ((Test-ExactCommitState $case[1] $case[2] $case[3]) -ne $case[4]) { throw "Commit-state gate failed for $($case[0])." } }
  $modelPath = Join-Path $ExpectedRoot 'docs/_data/capabilities.yml'
  $spanCount = ([regex]::Matches((Get-Content -LiteralPath (Join-Path $ExpectedRoot 'docs/index.html') -Raw), '<span>[^<]+</span>')).Count
  if ((Test-Path -LiteralPath $modelPath) -or $spanCount -lt 5) { throw 'RED content precondition was not observed: expected no model and legacy capability spans.' }
  Write-Output 'RED gates passed: unsafe roots and mismatched commit states fail closed; pre-edit legacy capability markup was detected.'
}

function Assert-GreenContract {
  if (-not (Test-RepositoryRoot $RepositoryRoot)) { throw 'Repository root must be an existing absolute path for this exact repository.' }
  $model = Get-Content -LiteralPath (Join-Path $ExpectedRoot 'docs/_data/capabilities.yml') -Raw
  $records = [regex]::Matches($model, '(?ms)^-\s+id:\s*([a-z0-9-]+)\s*\r?\n(.*?)(?=^-\s+id:|\z)')
  $actualIds = $records | ForEach-Object { $_.Groups[1].Value }
  if (@($actualIds).Count -ne 6 -or (@($actualIds) -join ',') -ne ($ExpectedIds -join ',')) { throw 'Capability IDs are missing, duplicated, or out of order.' }
  foreach ($record in $records) {
    $body = $record.Groups[2].Value
    foreach ($pattern in @('(?m)^\s+order:\s*[1-6]\s*$', '(?ms)^\s+en:\s*\r?\n\s+title:\s*.+\r?\n\s+summary:\s*.+$', '(?ms)^\s+es:\s*\r?\n\s+title:\s*.+\r?\n\s+summary:\s*.+$', '(?ms)^\s+evidence_boundary:\s*\r?\n\s+en:\s*.+\r?\n\s+es:\s*.+$')) {
      if ($body -notmatch $pattern) { throw "Capability '$($record.Groups[1].Value)' is missing a required bilingual field." }
    }
  }
  foreach ($token in @('score', 'scoring', 'proficiency', 'percentage', '%')) { if ($model -match "(?i)$([regex]::Escape($token))") { throw "Forbidden score/proficiency token '$token' was found in the model." } }
  foreach ($homePath in @('docs/index.html', 'docs/es/index.html')) {
    $content = Get-Content -LiteralPath (Join-Path $ExpectedRoot $homePath) -Raw
    if ($content -notmatch 'site\.data\.capabilities' -or $content -notmatch 'for capability in' -or $content -notmatch '<article class="[^"]*\bcapability-card\b[^"]*"') { throw "$homePath does not render semantic capability articles from the shared model." }
  }
  Write-Output 'GREEN static contract passed: six ordered bilingual records render from one Liquid model without score/proficiency tokens.'
}

if ($Mode -eq 'Red') { Assert-RedGates; exit 0 }
Assert-GreenContract
if ($CheckCurrentCommitState) {
  $porcelain = @(git -C $ExpectedRoot status --porcelain)
  $staged = @($porcelain | Where-Object { $_.Length -ge 2 -and $_.Substring(0, 1) -notin @(' ', '?') })
  $unstaged = @($porcelain | Where-Object { $_.Length -ge 2 -and $_.Substring(1, 1) -ne ' ' })
  $untracked = @($porcelain | Where-Object { $_.StartsWith('??') })
  if (-not (Test-ExactCommitState $staged $unstaged $untracked)) { throw 'Current commit state is not an exact staged-only candidate; no successor SHA may be frozen.' }
  Write-Output 'Current commit state is an exact staged-only candidate.'
}
