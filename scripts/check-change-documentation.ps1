[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$files = @(git diff --cached --name-only --diff-filter=ACMRT)
if ($files.Count -eq 0) { exit 0 }

$sourceChanges = @($files | Where-Object {
  $_ -notmatch '^(docs/|README\.md$|MAINTENANCE\.md$|AGENTS\.md$|CLAUDE\.md$|\.copilot-instructions\.md$|scripts/|\.githooks/|\.github/|openspec/)'
})
$docChanges = @($files | Where-Object { $_ -match '^docs/' })
if ($sourceChanges.Count -gt 0 -and $docChanges.Count -eq 0) {
  throw 'This commit changes project source without a docs/ update. Document the change in the owning documentation file.'
}
Write-Output 'Staged change documentation check passed.'
