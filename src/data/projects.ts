export interface TroubleshootingItem {
  problem: string;
  solution: string;
}

export interface Project {
  slug: string;
  title: string;
  company: string;
  companyPeriod: string;
  period: string;
  stack: string[];
  summary: string;
  role: string;
  achievements: string[];
  troubleshooting: TroubleshootingItem[];
  images: string[];
  thumbnail: string;
}

export interface ProjectSection {
  company: string;
  period: string;
  projects: Project[];
}

export const projects: Project[] = [
  {
    slug: "ai-search",
    title: "AI Search 서비스 기획 및 UI 개발",
    company: "아티언스",
    companyPeriod: "2024.11 – 현재",
    period: "2026.01 – 2026.06",
    stack: ["Next.js", "TypeScript", "SSE", "Markdown Rendering"],
    summary:
      "사내 AI 기반 검색·분석 서비스의 기획부터 UI 구현까지 전 과정을 담당했습니다. 실시간 스트리밍 응답과 마크다운 렌더링을 중심으로 사용자 경험을 설계했습니다.",
    role: "프론트엔드 단독 개발 · UI/UX 기획",
    achievements: [
      "SSE(Server-Sent Events) 기반 실시간 AI 응답 스트리밍 UI 구현",
      "마크다운 렌더링 파이프라인 구축 (코드 하이라이트, 테이블, 인용문 지원)",
      "검색 결과 및 분석 리포트 화면의 정보 구조 설계",
      "HTML 프로토타입을 통한 요구사항 구체화 후 실제 화면으로 전환",
    ],
    troubleshooting: [
      {
        problem:
          "SSE 스트리밍 중 마크다운 파싱 오류로 렌더링이 깨지는 현상",
        solution:
          "청크 단위 파싱 대신 버퍼링 후 완성된 블록 단위로 렌더링하는 방식으로 변경하여, 스트리밍 중에도 안정적인 마크다운 표시를 구현했습니다.",
      },
      {
        problem: "긴 AI 응답 렌더링 시 스크롤 성능 저하",
        solution:
          "가상 스크롤 대신 점진적 DOM 업데이트와 requestAnimationFrame 기반 스크롤 추적을 적용하여 60fps를 유지했습니다.",
      },
    ],
    thumbnail: "/images/projects/ai-search-thumb.svg",
    images: [
      "/images/projects/ai-search-1.svg",
      "/images/projects/ai-search-2.svg",
    ],
  },
  {
    slug: "artihub",
    title: "ArtiHub 운영 플랫폼 신규 개발",
    company: "아티언스",
    companyPeriod: "2024.11 – 현재",
    period: "2024.11 – 2026.06",
    stack: ["Next.js", "TypeScript", "Middleware", "File Upload"],
    summary:
      "사내 운영 플랫폼 ArtiHub를 0부터 설계·개발했습니다. 권한 관리, 파일 업로드, 대시보드 등 핵심 기능을 Next.js Middleware와 App Router로 구현했습니다.",
    role: "프론트엔드 리드 개발",
    achievements: [
      "Next.js Middleware 기반 인증·권한 라우팅 구현",
      "대용량 파일 업로드 UI 및 진행률 표시 컴포넌트 개발",
      "운영 대시보드 및 관리 화면 전체 UI 구축",
      "App Router 기반 레이아웃·라우팅 아키텍처 설계",
    ],
    troubleshooting: [
      {
        problem: "Middleware에서 세션 만료 시 무한 리다이렉트 발생",
        solution:
          "공개 경로 화이트리스트와 세션 갱신 로직을 분리하고, 리다이렉트 루프 방지 가드를 추가하여 안정적인 인증 흐름을 확보했습니다.",
      },
      {
        problem: "대용량 파일 업로드 시 브라우저 메모리 과다 사용",
        solution:
          "청크 업로드 방식으로 전환하고, 업로드 진행 상태를 스트림 기반으로 관리하여 메모리 사용량을 80% 이상 절감했습니다.",
      },
    ],
    thumbnail: "/images/projects/artihub-thumb.svg",
    images: [
      "/images/projects/artihub-1.svg",
      "/images/projects/artihub-2.svg",
      "/images/projects/artihub-3.svg",
    ],
  },
  {
    slug: "geo-intelligence",
    title: "GEO Intelligence 개발",
    company: "아티언스",
    companyPeriod: "2024.11 – 현재",
    period: "2026.04 – 2026.06",
    stack: ["Next.js", "TypeScript", "SVG Chart", "Markdown Rendering"],
    summary:
      "지리 정보 기반 인텔리전스 대시보드를 개발했습니다. SVG 차트와 마크다운 리포트를 결합하여 데이터 시각화와 분석 결과를 한 화면에서 제공합니다.",
    role: "프론트엔드 개발",
    achievements: [
      "커스텀 SVG 차트 컴포넌트 설계 (막대, 라인, 히트맵)",
      "지역별 데이터 필터링 및 드릴다운 인터랙션 구현",
      "분석 리포트 마크다운 렌더링 및 PDF 내보내기 UI",
      "반응형 대시보드 레이아웃 구성",
    ],
    troubleshooting: [
      {
        problem: "SVG 차트 리사이즈 시 좌표 계산 오류",
        solution:
          "ResizeObserver를 활용한 컨테이너 크기 추적과 viewBox 기반 스케일링을 적용하여, 모든 뷰포트에서 정확한 차트 렌더링을 보장했습니다.",
      },
    ],
    thumbnail: "/images/projects/geo-intelligence-thumb.svg",
    images: [
      "/images/projects/geo-intelligence-1.svg",
      "/images/projects/geo-intelligence-2.svg",
    ],
  },
  {
    slug: "ghost-blog-automation",
    title: "Ghost 블로그 발행 자동화 툴 개발",
    company: "아티언스",
    companyPeriod: "2024.11 – 현재",
    period: "2026.05 – 2026.06",
    stack: ["Next.js", "TypeScript", "Ghost Admin API", "Vercel"],
    summary:
      "Ghost CMS Admin API를 활용한 블로그 발행 자동화 도구를 개발했습니다. 마크다운 작성부터 Ghost 발행까지 원클릭 워크플로우를 제공합니다.",
    role: "프론트엔드 단독 개발",
    achievements: [
      "Ghost Admin API 연동 및 JWT 인증 흐름 구현",
      "마크다운 에디터 및 실시간 미리보기 UI 개발",
      "Vercel Serverless Functions 기반 API 프록시 구성",
      "발행 이력 관리 및 상태 추적 대시보드",
    ],
    troubleshooting: [
      {
        problem: "Ghost Admin API CORS 제한으로 클라이언트 직접 호출 불가",
        solution:
          "Next.js API Route를 프록시로 구성하고, 서버 사이드에서 Ghost JWT를 발급·관리하는 방식으로 CORS 문제를 해결했습니다.",
      },
    ],
    thumbnail: "/images/projects/ghost-blog-thumb.svg",
    images: [
      "/images/projects/ghost-blog-1.svg",
      "/images/projects/ghost-blog-2.svg",
    ],
  },
  {
    slug: "common-api-auth",
    title: "공통 API 및 인증 흐름 개선",
    company: "아티언스",
    companyPeriod: "2024.11 – 현재",
    period: "2025.04 – 2025.11",
    stack: [
      "Fetch API",
      "AbortController",
      "Authentication",
      "Error Handling",
    ],
    summary:
      "여러 서비스에서 공통으로 사용하는 API 클라이언트와 인증 흐름을 표준화했습니다. 요청 취소, 토큰 갱신, 에러 처리를 일관된 패턴으로 통합했습니다.",
    role: "프론트엔드 개발",
    achievements: [
      "fetch 기반 공통 API 클라이언트 모듈 설계 및 구현",
      "AbortController를 활용한 요청 취소 및 중복 요청 방지",
      "토큰 만료 시 자동 갱신 및 재시도 로직 구현",
      "HTTP 상태 코드별 통일된 에러 핸들링 및 사용자 피드백 처리",
    ],
    troubleshooting: [
      {
        problem: "토큰 갱신 중 동시 다발적 API 호출로 중복 갱신 요청 발생",
        solution:
          "갱신 Promise를 싱글톤으로 관리하는 토큰 갱신 큐 패턴을 도입하여, 갱신 중인 요청은 대기 후 재시도하도록 개선했습니다.",
      },
      {
        problem: "페이지 이동 시 진행 중인 API 요청이 상태 불일치 유발",
        solution:
          "AbortController를 라우트 변경 시 일괄 abort하는 훅을 구현하여, 언마운트된 컴포넌트의 stale 응답 처리 문제를 해결했습니다.",
      },
    ],
    thumbnail: "/images/projects/common-api-auth-thumb.svg",
    images: [
      "/images/projects/common-api-auth-1.svg",
      "/images/projects/common-api-auth-2.svg",
    ],
  },
  {
    slug: "lgu-mobile-manager",
    title: "LGU+ 모바일매니저 WebApp",
    company: "파인원 커뮤니케이션즈",
    companyPeriod: "2022.09 – 2024.10",
    period: "2023.08 – 2024.09",
    stack: [
      "React",
      "TypeScript",
      "React Query",
      "Zustand",
      "WebView",
      "Axios",
    ],
    summary:
      "LGU+ 모바일매니저 앱 내 WebView 기반 WebApp을 개발했습니다. React Query와 Zustand를 활용한 상태 관리와 네이티브 브릿지 연동을 담당했습니다.",
    role: "프론트엔드 개발",
    achievements: [
      "React Query 기반 서버 상태 캐싱 및 낙관적 업데이트 구현",
      "Zustand를 활용한 WebView-네이티브 간 공유 상태 관리",
      "Axios 인터셉터 기반 API 에러 처리 및 재시도 로직",
      "모바일 WebView 환경 최적화 (터치, 스크롤, 키보드 대응)",
    ],
    troubleshooting: [
      {
        problem: "WebView에서 iOS/Android 네이티브 브릿지 호출 타이밍 불일치",
        solution:
          "브릿지 준비 상태를 Promise로 래핑하는 초기화 유틸을 구현하고, 준비 완료 후에만 네이티브 API를 호출하도록 순서를 보장했습니다.",
      },
      {
        problem: "React Query 캐시와 Zustand 로컬 상태 간 데이터 불일치",
        solution:
          "서버 데이터는 React Query, UI 상태만 Zustand로 분리하는 단방향 데이터 흐름을 정립하여 상태 동기화 문제를 해소했습니다.",
      },
    ],
    thumbnail: "/images/projects/lgu-mobile-manager-thumb.svg",
    images: [
      "/images/projects/lgu-mobile-manager-1.svg",
      "/images/projects/lgu-mobile-manager-2.svg",
    ],
  },
  {
    slug: "kt-giga-genie",
    title: "KT 기가지니 셋톱박스 NEXT UI",
    company: "파인원 커뮤니케이션즈",
    companyPeriod: "2022.09 – 2024.10",
    period: "2022.10 – 2023.06",
    stack: ["jQuery", "HTML", "CSS", "Set-top Box UI"],
    summary:
      "KT 기가지니 셋톱박스 NEXT UI를 개발했습니다. TV 리모컨 기반 포커스 네비게이션과 저사양 셋톱박스 환경에 최적화된 UI를 구현했습니다.",
    role: "프론트엔드 개발",
    achievements: [
      "리모컨 방향키 기반 포커스 네비게이션 시스템 구현",
      "셋톱박스 해상도(1280×720)에 맞춘 UI 레이아웃 개발",
      "jQuery 기반 DOM 조작 및 이벤트 핸들링 최적화",
      "VOD, 홈, 설정 등 주요 화면 UI 개발",
    ],
    troubleshooting: [
      {
        problem: "포커스 이동 시 DOM reflow로 인한 UI 렉 발생",
        solution:
          "포커스 상태를 CSS class 토글로만 관리하고, getBoundingClientRect 호출을 최소화하여 렌더링 성능을 개선했습니다.",
      },
      {
        problem: "리모컨 빠른 연속 입력 시 포커스가 예상치 못한 요소로 이동",
        solution:
          "키 입력 debounce와 포커스 가능 요소 그래프를 사전 계산하여, 연속 입력에도 예측 가능한 포커스 이동을 보장했습니다.",
      },
    ],
    thumbnail: "/images/projects/kt-giga-genie-thumb.svg",
    images: [
      "/images/projects/kt-giga-genie-1.svg",
      "/images/projects/kt-giga-genie-2.svg",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function getProjectSections(): ProjectSection[] {
  const sections: ProjectSection[] = [];

  for (const project of projects) {
    const existing = sections.find(
      (section) => section.company === project.company
    );

    if (existing) {
      existing.projects.push(project);
    } else {
      sections.push({
        company: project.company,
        period: project.companyPeriod,
        projects: [project],
      });
    }
  }

  return sections;
}
