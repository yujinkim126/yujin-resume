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

- 헤더: `Frontend Developer` 라벨 + 헤드라인
- **채팅형 히어로**: 채용담당자 질문 말풍선 → AI 답변 타이핑 애니메이션 → 기술 스택 태그 페이드인
- **프로젝트 목록**: 회사별 섹션 + 카드 리스트
- **경력 타임라인**

### 프로젝트 상세 (`/projects/[slug]`)

- 프로젝트 개요, 스크린샷, 담당 역할, 주요 구현 내용, 트러블슈팅

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃, 폰트 CDN
│   ├── page.tsx            # 메인 페이지
│   ├── globals.css         # 전역 스타일
│   └── projects/[slug]/
│       └── page.tsx        # 프로젝트 상세 (동적 라우팅)
├── components/
│   ├── ChatHero.tsx        # 채팅형 히어로 + 타이핑 애니메이션
│   ├── ProjectCard.tsx     # 프로젝트 카드
│   └── CareerTimeline.tsx  # 경력 타임라인
└── data/
    ├── projects.ts         # 프로젝트 데이터 (7개)
    └── site.ts             # 자기소개 텍스트, 기술 스택, 경력

public/
└── images/projects/        # 프로젝트 썸네일·스크린샷 (SVG)
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

`src/data/projects.ts`에서 배열을 편집합니다.

```ts
{
  slug: "project-slug",       // URL: /projects/project-slug
  title: "프로젝트명",
  company: "회사명",
  companyPeriod: "2024.11 – 현재",
  period: "2026.01 – 2026.06",
  stack: ["Next.js", "TypeScript"],
  summary: "한두 줄 개요",
  role: "담당 역할",
  achievements: ["주요 구현 1", "주요 구현 2"],
  troubleshooting: [{ problem: "...", solution: "..." }],
  thumbnail: "/images/projects/xxx-thumb.svg",
  images: ["/images/projects/xxx-1.svg"],
}
```

썸네일·스크린샷은 `public/images/projects/`에 추가하고, SVG 사용 시 `&`는 `&amp;`로 이스케이프해야 합니다.

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
