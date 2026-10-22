# yujin-portfolio

개인 경력기술서/포트폴리오 사이트입니다. Next.js App Router 기반으로 제작했으며, Vercel 배포를 염두에 두고 구성했습니다.

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: lucide-react
- **Font**: Pretendard (본문), Inter (영문 라벨·태그)

## 주요 기능

### 메인 페이지 (`/`)

- 헤더: 이름, 한 줄 소개, 연락처
- **대표 케이스** (`featured: true`): 왼쪽에 핵심 지표 3개와 문제 → 결정 → 결과, 오른쪽에 화면 캡처. 캡처가 없으면 `flow`를 흐름도로 표시
- **그 밖의 프로젝트**: 카드 목록 + 기타 작업(`otherWorks`)
- 경력과 기술

### 프로젝트 상세 (`/projects/[slug]`)

- 개요, 지표, 담당 역할·기술, 화면(또는 흐름도)
- **문제 해결과 결정**: 문제 / 결정 / 이유 / 결과
- 주요 구현 내용, 다음 프로젝트 링크

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx              # 루트 레이아웃, Pretendard 폰트
│   ├── page.tsx                # 메인 페이지
│   ├── globals.css
│   └── projects/[slug]/page.tsx  # 프로젝트 상세
├── components/
│   ├── FeaturedCase.tsx        # 대표 케이스 행
│   ├── OtherProjectCard.tsx    # 그 밖의 프로젝트 카드
│   ├── CaseParts.tsx           # 지표, 문제/결정/결과, 흐름도
│   └── ProjectImageGallery.tsx # 스크린샷 + 확대 보기
└── data/
    ├── projects.ts             # 프로젝트 데이터
    └── site.ts                 # 프로필, 경력, 기술
```

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 엽니다.

### 프로덕션 빌드

```bash
npm run build
npm start
```

### 린트

```bash
npm run lint
```

## 콘텐츠 수정 방법

### 프로젝트 추가·수정

`src/data/projects.ts`의 `Project` 타입을 참고합니다. `featured: true`인 프로젝트가 메인 대표 케이스로 나오고, `stories`가 상세 페이지의 "문제 해결과 결정"이 됩니다.

### 이미지 파일 규칙

| 용도 | 파일명 패턴 | 예시 |
|------|-------------|------|
| 목록 썸네일 | `{이름}-thumb.png` | `ai-search-thumb.png` |
| 상세 스크린샷 | `{이름}-1.png`, `-2.png` … | `ai-search-1.png` |

- 저장 경로: `public/images/projects/`
- 코드 경로: `/images/projects/파일명.png`
- 권장 비율: 가로 16:9 (모바일 WebApp은 세로 원본 + `imageOrientation: "portrait"`)
- LGU+처럼 세로 스크린 2장을 합친 가로 썸네일(`lgu-mobile-manager-thumb.png`)도 사용 가능

### 자기소개·경력·기술 스택

`src/data/site.ts`에서 아래 항목을 수정합니다.

- `INTRO_TEXT` — 히어로 타이핑 자기소개
- `TECH_STACK` — 히어로 기술 스택 태그
- `careers` — 경력 타임라인

## 배포 (Vercel)

1. GitHub 등에 저장소를 push합니다.
2. [Vercel](https://vercel.com)에서 프로젝트를 import합니다.
3. Framework Preset: **Next.js** (기본값)
4. Deploy

`next.config.mjs`는 기본 설정을 유지합니다. 별도 환경 변수는 필요하지 않습니다.

## 디자인 가이드

| 항목             | 값                           |
| ---------------- | ---------------------------- |
| 본문 line-height | 1.7                          |
| 헤딩 font-weight | 500                          |
| 카드 border      | 0.5px, radius 12px           |
| 강조 컬러        | `#4F46E5` (라벨·태그 텍스트) |
| 태그 배경        | `#EEF2FF`                    |
| 트러블슈팅 라벨  | 문제: orange pill / 해결: green pill |
