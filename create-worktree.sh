#!/bin/bash

if [ $# -eq 0 ]; then
    echo "Error: 워크트리 이름을 입력해주세요!"
    exit 1
fi

NAME="$1"
WORKTREE_PATH=".claude/worktrees/$NAME"
BRANCH_NAME="$NAME"

if git worktree add -b "$BRANCH_NAME" "$WORKTREE_PATH"; then
    echo "워크트리 생성 성공: $WORKTREE_PATH"
    cd "$WORKTREE_PATH" || exit 1
    echo "디렉터리 변경 완료: $(pwd)"
    claude
else
    echo "워크트리 생성에 실패했습니다."
    exit 1
fi