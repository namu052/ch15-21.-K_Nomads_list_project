param(
    [Parameter(Mandatory=$true)]
    [string]$Name
)

$WorktreePath = ".claude/worktrees/$Name"
$BranchName = $Name

git worktree add -b $BranchName $WorktreePath

if ($LASTEXITCODE -eq 0) {
    Write-Host "워크트리 생성 성공: $WorktreePath"
    Set-Location $WorktreePath
    claude
} else {
    Write-Host "워크트리 생성 실패"
}