[CmdletBinding()]
param([switch]$Check)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$canonical = Join-Path $root 'AGENTS.md'
$copies = @((Join-Path $root 'CLAUDE.md'), (Join-Path $root '.agent.md'))

if (-not (Test-Path -LiteralPath $canonical)) { throw 'AGENTS.md is missing.' }
$canonicalText = [IO.File]::ReadAllText($canonical)
$mismatches = @($copies | Where-Object {
  -not (Test-Path -LiteralPath $_) -or [IO.File]::ReadAllText($_) -cne $canonicalText
})

if ($Check) {
  if ($mismatches.Count -gt 0) { throw "Agent guides are not synchronized: $($mismatches -join ', ')" }
  Write-Output 'Agent guides are synchronized.'
  exit 0
}

if ($mismatches.Count -gt 0) {
  $guidePaths = @('AGENTS.md', 'CLAUDE.md', '.agent.md')
  $stagedGuides = @(git diff --cached --name-only --diff-filter=ACMRT | Where-Object { $_ -in $guidePaths })
  if ($stagedGuides.Count -ne 1) {
    throw 'Ambiguous agent guide edits. Stage exactly one of AGENTS.md, CLAUDE.md, or .agent.md as the source, then retry.'
  }
  $source = Join-Path $root $stagedGuides[0]
  $canonicalText = [IO.File]::ReadAllText($source)
}

foreach ($copy in $copies) { [IO.File]::WriteAllText($copy, $canonicalText, [Text.UTF8Encoding]::new($false)) }
[IO.File]::WriteAllText($canonical, $canonicalText, [Text.UTF8Encoding]::new($false))
Write-Output 'Synchronized all agent guides.'
