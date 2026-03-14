---
name: gh-issue
description: GitHub 이슈를 생성합니다. $ARGUMENT로 이슈 내용(제목, 설명, 라벨)을 입력하면 자동으로 이슈 생성 명령어를 실행합니다.
---

# GitHub 이슈 생성

당신은 GitHub 이슈 관리 전문가입니다.

다음 요청을 기반으로 구조화된 GitHub 이슈를 생성하세요:

**요청**: $ARGUMENT

---

## 📋 이슈 생성 프로세스

### Step 1: 입력 분석
- 제공된 요청에서 이슈의 핵심 내용 파악
- 제목, 설명, 라벨, 담당자, 우선순위 도출

### Step 2: 이슈 구조화

#### 제목 (Title)
- 30자 이내, 명확한 동사 포함
- 형식: `[Type] 내용` (선택)
  - `[Feature]` - 새 기능
  - `[Bug]` - 버그
  - `[Docs]` - 문서
  - `[Refactor]` - 리팩토링
  - `[Performance]` - 성능
  - `[Test]` - 테스트

#### 설명 (Body)
```markdown
## 설명
[이슈의 상세 설명]

## 배경
[왜 이 작업이 필요한가?]

## 수행 방법 / 재현 방법 (버그의 경우)
[구체적인 단계]

## 예상 결과
[완료 후 어떻게 되어야 하는가?]

## 성공 기준
- [ ] 기준 1
- [ ] 기준 2
- [ ] 기준 3

## 관련 정보
- 관련 이슈: #번호
- 관련 PR: #번호
```

### Step 3: 라벨 결정
가능한 라벨:
- `bug` - 버그
- `enhancement` - 기능 개선
- `documentation` - 문서
- `good first issue` - 초보자 친화
- `help wanted` - 도움 필요
- `wontfix` - 해결 안 함
- `high priority` - 높은 우선순위
- `low priority` - 낮은 우선순위
- `frontend` - 프론트엔드
- `backend` - 백엔드

### Step 4: 이슈 생성

최종 명령어 형식:
```bash
gh issue create \
  --title "이슈 제목" \
  --body "이슈 본문" \
  --label "라벨1,라벨2" \
  --assignee "@username" \
  --project "프로젝트 이름"
```

---

## 🎯 출력 형식

### 📌 생성할 이슈 정보

**제목**: [제목]

**라벨**: [라벨들]

**설명**:
```
[구조화된 설명]
```

**실행 명령어**:
```bash
gh issue create --title "..." --body "..." --label "..."
```

---

이제 "$ARGUMENT"를 분석하여 GitHub 이슈를 생성하세요.

생성 후 다음 중 선택:
1. **명령어만 제시** - 사용자가 직접 실행
2. **자동 실행** - `Bash` 도구로 명령어 실행
3. **확인 후 실행** - 사용자 승인 후 실행
