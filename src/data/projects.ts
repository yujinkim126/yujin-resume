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
    stack: [
      "Next.js",
      "TypeScript",
      "SSE",
      "Markdown Rendering",
      "File Search",
      "DB Search",
      "Agentic Search",
    ],
    summary:
      "사내 AI 기반 검색·분석 서비스의 화면 흐름과 사용자 인터페이스를 기획하고 구현했습니다. 파일 검색, DB 검색, Agentic Search를 채팅형 인터페이스로 구성했으며, AI 응답을 실시간으로 확인할 수 있는 스트리밍 UI와 다양한 응답 포맷 렌더링을 개발했습니다.",
    role: "프론트엔드 개발 · UI/UX 기획 · HTML 프로토타입 제작",
    achievements: [
      "File Search, DB Search, Agentic Search 메뉴 구조 및 화면 흐름 설계",
      "SSE 기반 AI 응답 스트리밍 UI 구현",
      "마크다운, 표, 코드, 이미지, 파일 다운로드 등 복합 응답 포맷 렌더링 처리",
      "채팅방 생성, 히스토리 조회, 제목 변경, 삭제 등 반복 사용 흐름 구현",
      "HTML 프로토타입을 통해 모호한 요구사항을 화면 단위로 구체화한 뒤 실제 서비스 UI로 전환",
    ],
    troubleshooting: [
      {
        problem:
          "AI 응답이 스트리밍 방식으로 들어오면서 마크다운, 표, 코드 블록이 완성되기 전에 화면에 표시되어 렌더링이 불안정해질 수 있는 문제가 있었습니다.",
        solution:
          "응답 청크를 그대로 출력하지 않고, 메시지 상태를 누적 관리하면서 마크다운 렌더러가 처리 가능한 단위로 화면에 반영되도록 구성했습니다. 이를 통해 스트리밍 중에도 사용자가 응답 생성 과정을 자연스럽게 확인할 수 있도록 개선했습니다.",
      },
      {
        problem:
          "AI 검색 결과가 텍스트뿐 아니라 표, 이미지, 파일 등 다양한 형식으로 내려와 단순 채팅 UI만으로는 응답 구조를 표현하기 어려웠습니다.",
        solution:
          "응답 타입별 렌더링 영역을 분리하고, 마크다운 본문·차트 이미지·파일 다운로드·출처 영역을 한 화면에서 확인할 수 있도록 정보 구조를 재정리했습니다.",
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
    title: "ArtiHub 운영 플랫폼 기능 개발",
    company: "아티언스",
    companyPeriod: "2024.11 – 현재",
    period: "2024.11 – 2026.06",
    stack: [
      "Next.js",
      "TypeScript",
      "Middleware",
      "CloudFront",
      "Lambda",
      "Authentication",
    ],
    summary:
      "디지털 마케팅 운영 업무를 지원하는 사내 플랫폼 ArtiHub의 주요 화면과 기능을 개발했습니다. 권한 기반 접근 제어, 리포트 화면, 파일 업로드, 운영 관리 기능 등 실무자가 사용하는 업무 흐름을 화면으로 구현했습니다.",
    role: "프론트엔드 개발 · 운영 화면 설계 · 배포 이슈 대응",
    achievements: [
      "Next.js Middleware 기반 로그인 및 권한별 접근 제어 흐름 구현",
      "Data Report, Custom Report 등 운영 리포트 화면 개발",
      "Bill-through 업무 단계에 맞춘 상태 표시 및 상세 화면 UI 구현",
      "CloudFront, Lambda 기반 배포 환경에서 정적 리소스 및 라우팅 이슈 대응",
      "사이트맵, 블로그 경로, 서비스 페이지 등 운영 반영을 위한 프론트엔드 배포 작업 수행",
    ],
    troubleshooting: [
      {
        problem:
          "권한별로 접근 가능한 메뉴와 페이지가 달라 로그인 상태, role 정보, 보호 경로 처리를 일관되게 관리해야 했습니다.",
        solution:
          "Middleware에서 인증 쿠키와 권한 정보를 확인하고, 공개 경로와 보호 경로를 분리하여 접근 흐름을 제어했습니다. 이를 통해 권한이 없는 사용자가 관리 페이지나 제한된 리포트에 접근하지 못하도록 처리했습니다.",
      },
      {
        problem:
          "운영 리포트 화면에서 국가, 기간, 파트너, 지표 등 조건이 많아 사용자가 원하는 데이터를 찾기 어려울 수 있었습니다.",
        solution:
          "필터 조건과 결과 테이블의 관계를 명확히 보이도록 화면 구조를 정리하고, 조건 선택 후 조회되는 데이터 흐름을 사용자가 예측할 수 있게 구성했습니다.",
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
    title: "GEO Intelligence 서비스 UI 개발",
    company: "아티언스",
    companyPeriod: "2024.11 – 현재",
    period: "2026.04 – 2026.06",
    stack: [
      "Next.js",
      "TypeScript",
      "SVG Chart",
      "Markdown Rendering",
      "AI Report UI",
    ],
    summary:
      "생성형 AI 검색 환경에서 브랜드와 콘텐츠의 노출 상태를 분석하기 위한 GEO Intelligence 화면을 개발했습니다. AI Query Fan-Out, GEO Analyzer, GEO Citation Tracker, GEO Entity Similarity 등 분석 목적별 메뉴를 구성하고 결과 화면을 구현했습니다.",
    role: "프론트엔드 개발 · 분석 화면 UI 구성",
    achievements: [
      "AI Query Fan-Out, GEO Analyzer, GEO Citation Tracker, GEO Entity Similarity 메뉴 UI 개발",
      "분석 결과를 표, 차트, 리포트 형태로 확인할 수 있는 화면 구조 설계",
      "SVG 기반 커스텀 차트 UI 구현",
      "마크다운 기반 분석 리포트 렌더링 처리",
      "사이드바 메뉴 정렬 및 화면 탐색 흐름 개선",
    ],
    troubleshooting: [
      {
        problem:
          "분석 결과가 텍스트 리포트, 수치 데이터, 차트 형태로 함께 제공되어 한 화면에서 정보 우선순위를 잡기 어려웠습니다.",
        solution:
          "분석 목적별로 화면을 분리하고, 핵심 지표·상세 결과·설명 리포트가 순차적으로 읽히도록 레이아웃을 구성했습니다.",
      },
      {
        problem:
          "차트 라이브러리만으로는 서비스 목적에 맞는 간단한 시각 요소를 빠르게 표현하기 어려운 화면이 있었습니다.",
        solution:
          "SVG 기반의 커스텀 차트 컴포넌트를 구성해 필요한 형태의 막대, 라인, 비교 시각화를 화면에 맞게 구현했습니다.",
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
    title: "Ghost 블로그 자동화 툴 개발",
    company: "아티언스",
    companyPeriod: "2024.11 – 현재",
    period: "2026.05 – 2026.06",
    stack: ["Next.js", "TypeScript", "Ghost Admin API", "Gemini API", "PM2"],
    summary:
      "Ghost CMS 기반 블로그 운영을 효율화하기 위한 내부 자동화 도구를 개발했습니다. 기존 문서 작성 후 Ghost 관리자에서 수동 등록하던 과정을 줄이고, 글 작성·수정·이미지 첨부·메타데이터 추천을 하나의 화면에서 처리할 수 있도록 구성했습니다.",
    role: "프론트엔드 단독 개발 · API 연동 · 사내 서버 배포",
    achievements: [
      "Ghost Admin API 연동 및 JWT 인증 처리 구현",
      "블로그 본문 작성, 이미지 첨부, 기존 글 목록 조회, 기존 글 수정 기능 개발",
      "Gemini API를 활용한 제목·본문 기반 메타데이터 추천 기능 구현",
      "Post slug 기반 Canonical URL 자동 생성 처리",
      "Vercel 개발 환경에서 사내 Ubuntu 서버 배포 환경으로 이전하고 PM2로 프로세스 운영",
    ],
    troubleshooting: [
      {
        problem:
          "Ghost Admin API를 클라이언트에서 직접 호출하면 Admin API Key 노출 위험이 있었습니다.",
        solution:
          "서버 측에서 Ghost JWT를 생성하고 API 요청을 처리하도록 구성하여 인증 정보를 클라이언트에 노출하지 않도록 개선했습니다.",
      },
      {
        problem:
          "노션 등 외부 문서에서 본문을 복사해올 때 이미지가 실제 업로드 이미지가 아니라 image.png 같은 로컬 참조 형태로 들어오는 문제가 있었습니다.",
        solution:
          "본문 작성 흐름과 이미지 첨부 흐름을 분리하고, Ghost에 등록할 이미지는 별도 업로드 후 본문에 삽입하는 방식으로 처리 방향을 정리했습니다.",
      },
    ],
    thumbnail: "/images/projects/ghost-blog-thumb.svg",
    images: [
      "/images/projects/ghost-blog-1.svg",
      "/images/projects/ghost-blog-2.svg",
    ],
  },
  {
    slug: "looker-dashboard",
    title: "Looker Studio 운영 대시보드 구축",
    company: "아티언스",
    companyPeriod: "2024.11 – 현재",
    period: "2026.06 – 2026.06",
    stack: [
      "Looker Studio",
      "BigQuery",
      "SQL",
      "Data Visualization",
      "Dashboard",
    ],
    summary:
      "HQ와 Local에서 사용할 운영 대시보드를 Looker Studio와 BigQuery 기반으로 구성했습니다. 월별 점수, 제품군별 지표, 국가별 트렌드, 이슈 현황 등을 시각화하고 필터 조건에 따라 데이터를 확인할 수 있도록 화면을 설계했습니다.",
    role: "대시보드 구성 · 데이터 연결 · 차트 설정",
    achievements: [
      "Overview, Issue, Visibility, Activity 영역의 대시보드 화면 구성",
      "월 선택 컨트롤과 최근 6개월 트렌드 차트 연결",
      "반원 게이지, 스코어카드, 라인 차트, 누적 막대 차트, 테이블 구성",
      "전월 대비 증감값 계산 및 양수·음수에 따른 색상 표시 처리",
      "BigQuery 월 기준 테이블과 실제 지표 테이블을 혼합하여 데이터가 없는 월도 차트 축에 표시되도록 구성",
    ],
    troubleshooting: [
      {
        problem:
          "특정 월에 데이터가 없으면 차트에서 해당 월 자체가 사라져 최근 6개월 흐름을 안정적으로 보여주기 어려웠습니다.",
        solution:
          "월 기준 테이블을 별도로 두고 실제 데이터 테이블과 혼합하여, 선택 월 기준 최근 6개월 축은 유지하되 데이터가 있는 월에만 값이 표시되도록 구성했습니다.",
      },
      {
        problem:
          "최근 3개월 이슈 차트에서 기준 월과 데이터 월의 관계가 명확하지 않아 필터 적용 시 원하는 월 범위가 나오지 않았습니다.",
        solution:
          "recent_3_month_flag 필드를 만들어 최근 3개월에 해당하는 데이터만 남기는 방식으로 필터링 기준을 분리했습니다.",
      },
    ],
    thumbnail: "/images/projects/looker-dashboard-thumb.svg",
    images: [
      "/images/projects/looker-dashboard-1.svg",
      "/images/projects/looker-dashboard-2.svg",
    ],
  },
  {
    slug: "lgu-mobile-manager",
    title: "LGU+ 모바일매니저 WebApp 개발",
    company: "파인원 커뮤니케이션즈",
    companyPeriod: "2022.09 – 2024.10",
    period: "2023.08 – 2024.09",
    stack: [
      "React",
      "TypeScript",
      "React Query",
      "Zustand",
      "Axios",
      "WebView",
    ],
    summary:
      "LGU+ 모바일매니저 앱 내 WebView 기반 WebApp의 주요 기능을 개발했습니다. 모바일 인증, 보안 흐름, 서비스 화면 개발과 API 연동을 담당했으며, 사용자 상태와 서버 상태를 분리해 안정적인 화면 흐름을 구성했습니다.",
    role: "프론트엔드 개발",
    achievements: [
      "모바일 인증번호 입력, 재전송, 트랜잭션 만료 등 로그인 과정의 예외 케이스 처리",
      "API 오류 발생 시 로그아웃 및 로그인 페이지 이동 등 인증 실패 흐름 개선",
      "accessToken이 쿠키에 직접 노출되지 않도록 토큰 조회 방식 개선",
      "React Query 기반 서버 상태 관리 및 API 호출 흐름 구성",
      "Zustand를 활용한 화면 상태 관리",
    ],
    troubleshooting: [
      {
        problem:
          "인증번호 검증, 재전송, 만료 등 로그인 과정에서 예외 케이스가 많아 사용자가 현재 상태를 이해하기 어려운 문제가 있었습니다.",
        solution:
          "인증 상태별 분기 처리를 정리하고, 오류 발생 시 로그아웃 및 로그인 페이지 이동 등 후속 동작을 명확하게 처리하여 인증 흐름의 안정성을 높였습니다.",
      },
      {
        problem:
          "토큰이 쿠키에 직접 노출되는 구조는 보안 측면에서 개선이 필요했습니다.",
        solution:
          "토큰을 화면에서 직접 다루는 방식을 줄이고, 필요한 시점에 토큰 정보를 조회하는 방식으로 변경하여 클라이언트 노출 범위를 줄였습니다.",
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
    title: "KT 기가지니 셋톱박스 UI 개발",
    company: "파인원 커뮤니케이션즈",
    companyPeriod: "2022.09 – 2024.10",
    period: "2022.10 – 2023.06",
    stack: ["jQuery", "HTML", "CSS", "Set-top Box UI", "Remote Control UI"],
    summary:
      "KT 기가지니 셋톱박스 환경에서 동작하는 TV UI를 개발했습니다. 새로운 GUI/UI 규격에 맞춰 검색 및 설정 화면을 재구성하고, 리모컨 조작에 따른 포커스 이동과 선택 기능을 구현했습니다.",
    role: "프론트엔드 개발",
    achievements: [
      "검색 및 설정 화면을 신규 GUI/UI 규격에 맞춰 재구성",
      "기존 기능과 API 연동을 유지하면서 화면 구조 개선",
      "리모컨 방향키 입력에 따른 포커스 이동 및 선택 기능 구현",
      "셋톱박스 단말 환경을 고려한 jQuery 기반 이벤트 처리",
      "QA 이슈 대응 및 다양한 기가지니 단말 테스트 수행",
    ],
    troubleshooting: [
      {
        problem:
          "리모컨 방향키 조작 기반 UI는 마우스 기반 웹 UI와 달리 현재 포커스 위치와 다음 이동 위치를 명확하게 제어해야 했습니다.",
        solution:
          "화면 요소별 포커스 가능 상태를 관리하고, 방향키 입력에 따라 다음 포커스 대상이 이동하도록 이벤트 흐름을 구성했습니다.",
      },
      {
        problem:
          "셋톱박스 단말에서는 브라우저 환경보다 렌더링 성능과 입력 반응성이 제한적이어서 화면 조작이 무겁게 느껴질 수 있었습니다.",
        solution:
          "불필요한 DOM 조작을 줄이고, 포커스 이동 시 필요한 클래스 변경 중심으로 처리하여 리모컨 조작 반응성을 개선했습니다.",
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
      (section) => section.company === project.company,
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
