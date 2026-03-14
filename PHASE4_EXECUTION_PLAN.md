# Phase 4 Execution Plan: 필터 기능 및 정렬 기능 완성

## 개요
필터 UI를 구현하여 사용자가 예산, 지역, 환경, 계절로 도시를 필터링할 수 있게 하고, 좋아요 순서로 정렬합니다. 섹션 제목을 "도시 리스트"로 변경합니다.

---

## 구현 전략

### Step 1: 섹션 제목 변경
**파일**: `components/sections/featured-cities-section.tsx` (수정)

변경:
```
🔥 지금 인기있는 도시 → 🏙️ 도시 리스트
```

---

### Step 2: 필터 상태 관리 구현
**파일**: `components/sections/featured-cities-section.tsx` (수정)

상태 추가:
```typescript
const [filters, setFilters] = useState({
  budget: '',      // '100만원 미만' | '100~200만원' | '200만원 이상' | ''
  region: '',      // '수도권' | '경상도' | '전라도' | '강원도' | '제주도' | '충청도' | ''
  environment: [], // string[]
  season: ''       // '봄' | '여름' | '가을' | '겨울' | ''
})

const [sortBy, setSortBy] = useState('likes') // 'likes' (기본값)
```

---

### Step 3: 필터 UI 구현
**파일**: `components/sections/featured-cities-section.tsx` (수정)

위치: 섹션 헤더와 카드 그리드 사이

필터 바 구조:
```
[예산 ▼] [지역 ▼] [환경 ▼] [계절 ▼]
```

필터 종류:
- **예산**: 드롭다운 (라디오 버튼 스타일)
  - 전체 (기본)
  - 100만원 미만
  - 100~200만원
  - 200만원 이상

- **지역**: 드롭다운
  - 전체 (기본)
  - 수도권
  - 경상도
  - 전라도
  - 강원도
  - 제주도
  - 충청도

- **환경**: 멀티셀렉트 (체크박스 스타일)
  - 자연친화
  - 도심선호
  - 카페작업
  - 코워킹 필수
  - (선택 제거 가능)

- **계절**: 드롭다운
  - 전체 (기본)
  - 봄
  - 여름
  - 가을
  - 겨울

---

### Step 4: 필터링 로직 구현
**파일**: `components/sections/featured-cities-section.tsx` (수정)

필터링 함수:
```typescript
const filteredCities = CITIES.filter(city => {
  // 예산 필터
  if (filters.budget && city.budget !== filters.budget) return false

  // 지역 필터
  if (filters.region && city.region !== filters.region) return false

  // 환경 필터 (OR: 하나 이상 일치)
  if (filters.environment.length > 0) {
    if (!city.environment.some(env => filters.environment.includes(env))) {
      return false
    }
  }

  // 계절 필터
  if (filters.season && city.bestSeason !== filters.season) return false

  return true
})
```

정렬 로직:
```typescript
const sortedCities = filteredCities.sort((a, b) => {
  if (sortBy === 'likes') {
    return b.likes - a.likes // 좋아요 많은 순
  }
  return 0
})
```

---

### Step 5: 필터 변경 핸들러 구현
**파일**: `components/sections/featured-cities-section.tsx` (수정)

```typescript
const handleBudgetChange = (value: string) => {
  setFilters(prev => ({ ...prev, budget: value }))
}

const handleRegionChange = (value: string) => {
  setFilters(prev => ({ ...prev, region: value }))
}

const handleEnvironmentChange = (env: string, checked: boolean) => {
  setFilters(prev => ({
    ...prev,
    environment: checked
      ? [...prev.environment, env]
      : prev.environment.filter(e => e !== env)
  }))
}

const handleSeasonChange = (value: string) => {
  setFilters(prev => ({ ...prev, season: value }))
}
```

---

### Step 6: UI 렌더링
**파일**: `components/sections/featured-cities-section.tsx` (수정)

간단한 드롭다운 구현 (외부 라이브러리 미사용):
- 클릭 시 옵션 목록 표시
- 선택 시 드롭다운 닫힘
- 각 필터별 현재 선택 표시

환경 필터 (멀티셀렉트):
- 체크박스 스타일로 표시
- 선택된 항목 표시

---

## 수정 대상 파일 목록

| 파일 | 작업 |
|---|---|
| `components/sections/featured-cities-section.tsx` | 섹션 제목 변경, 필터 상태/UI/로직 추가 |

---

## 검증 체크리스트

- [ ] 섹션 제목 변경
  - [ ] "🏙️ 도시 리스트"로 표시됨

- [ ] 필터 UI 확인
  - [ ] 4가지 필터 모두 접근 가능
  - [ ] 드롭다운이 정상 작동
  - [ ] 멀티셀렉트 (환경)가 정상 작동
  - [ ] 모바일에서도 사용 가능

- [ ] 필터링 로직 확인
  - [ ] 단일 필터 선택 → 일치하는 도시만 표시
  - [ ] 여러 필터 동시 선택 → AND 조건으로 필터링
  - [ ] 필터 조건 없음 → 모든 도시 표시
  - [ ] 환경 필터 여러 개 선택 → 하나 이상 일치하는 도시 표시

- [ ] 정렬 확인
  - [ ] 기본 정렬: 좋아요 순 (높은순)
  - [ ] 필터 적용 후에도 좋아요 순 유지
  - [ ] 필터링된 도시들이 올바르게 정렬됨

- [ ] 기존 기능 확인
  - [ ] 좋아요/싫어요 버튼 정상 작동
  - [ ] 필터 정보 표시 정상
  - [ ] 반응형 디자인 정상

- [ ] TypeScript & Lint 검증
  - [ ] npm run typecheck 통과
  - [ ] lint 경고 없음
