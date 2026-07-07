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
  imageOrientation?: "landscape" | "portrait";
}

export interface ProjectSection {
  company: string;
  period: string;
  projects: Project[];
}

export const projects: Project[] = [
  {
    slug: "semantic-search",
    title: "Semantic Search 서비스 기획 및 UI 개발",
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
      "Semantic Search 서비스의 초기 기획부터 메뉴 구조, 화면 흐름 설계, HTML 프로토타입 제작, 실제 UI 개발까지 담당했습니다. File Search, DB Search, Agentic Search처럼 서로 다른 검색 흐름과 응답 구조를 하나의 채팅형 인터페이스로 구성하고, 스트리밍 응답과 출처·파일·후속 질문·히스토리가 자연스럽게 이어지도록 화면을 설계했습니다.",
    role: "서비스 기획 · 화면 흐름 설계 · 프론트엔드 개발 · HTML 프로토타입 제작",
    achievements: [
      "File Search, DB Search, Agentic Search의 서비스 메뉴 구조와 사용자 질문 흐름 기획",
      "각 검색 모듈별 응답 구조를 정의하고, 채팅형 UI에서 답변·출처·파일·후속 질문·히스토리가 자연스럽게 이어지도록 화면 흐름 설계",
      "HTML 프로토타입으로 초기 화면 구조와 주요 인터랙션을 시각화해 이해관계자와 기능 방향 정리",
      "SSE 기반 검색 응답 스트리밍 UI 구현 및 응답 생성 중/완료 상태 분리",
      "마크다운, 표, 코드, 이미지 미리보기, 파일 다운로드 카드 등 복합 응답 포맷 렌더링 처리",
      "채팅방 생성, 히스토리 조회, 제목 변경, 삭제 등 대화 관리 기능 개발",
      "File Search 저장소 설정, Google Drive 연동 상태, 파일 동기화 상태 UI 개발",
      "DB Search 운영 설정 화면 개발 — 글로벌 규칙 입력, 화이트리스트 방식 테이블 필터, 분석 템플릿 등록/활성화 관리 기능 구현",
      "채팅 입력창에서 '/' 또는 '@' 입력 시 등록된 템플릿을 검색·호출하는 슬래시 커맨드형 입력 기능 구현",
      "Agentic Search의 후속 질문, 선택지 응답, 직접 입력, resume stream 처리 UI 구현",
    ],
    troubleshooting: [
      {
        problem:
          "검색 응답이 스트리밍 방식으로 전달되면서 마크다운, 표, 코드 블록이 완성되기 전에 화면에 표시되어 렌더링이 불안정해질 수 있는 문제가 있었습니다.",
        solution:
          "응답 청크를 그대로 출력하지 않고 메시지 상태를 누적 관리했으며, 응답 생성 중 상태와 완료 상태를 분리했습니다. 이를 통해 스트리밍 중에도 사용자가 답변 생성 과정을 자연스럽게 확인하면서, 최종 응답에서는 마크다운과 표, 코드 블록이 안정적으로 렌더링되도록 구성했습니다.",
      },
      {
        problem:
          "검색 결과가 텍스트뿐 아니라 표, 이미지, 파일, 출처, 후속 질문 등 다양한 형식으로 내려와 단순 채팅 UI만으로는 응답 구조를 표현하기 어려웠습니다.",
        solution:
          "응답 타입별 렌더링 영역을 분리하고, 본문·표·이미지·파일 다운로드·출처·후속 질문 영역을 각각 독립적으로 확인할 수 있도록 정보 구조를 재정리했습니다. 사용자가 답변을 읽은 뒤 관련 파일이나 출처를 바로 확인하고 다음 질문으로 이어갈 수 있는 흐름을 만들었습니다.",
      },
      {
        problem:
          "Agentic Search에서는 후속 질문, 선택지, 직접 입력, 이어서 답변 받기 등 일반 검색보다 대화 흐름이 복잡해 사용자가 현재 진행 상태를 놓치기 쉬웠습니다.",
        solution:
          "질문 입력, 응답 스트리밍, 후속 질문, 선택지 응답, 직접 입력, 이전 대화 히스토리를 분리된 UI 상태로 관리했습니다. 각 단계가 채팅형 인터페이스 안에서 순차적으로 노출되도록 구성해 사용자가 현재 답변 흐름을 이해하기 쉽게 개선했습니다.",
      },
    ],
    thumbnail: "/images/projects/ai-search-thumb.png",
    images: [
      "/images/projects/ai-search-1.png",
      "/images/projects/ai-search-2.png",
      "/images/projects/ai-search-3.png",
    ],
  },
  {
    slug: "artihub",
    title: "ArtiHub B2B 운영 플랫폼 개발",
    company: "아티언스",
    companyPeriod: "2024.11 – 현재",
    period: "2024.11 – 2026.06",
    stack: [
      "Next.js",
      "TypeScript",
      "Middleware",
      "Zustand",
      "TanStack Query",
      "Authentication",
      "File Upload/Download",
    ],
    summary:
      "ArtiHub는 회사, 외부 협력사, 로컬 에이전시가 함께 사용하는 B2B 운영 플랫폼입니다. 이메일과 파일로 분산되어 있던 제출·검토·승인·정산 업무 흐름을 플랫폼 화면으로 구조화하고, 권한별 접근 제어와 상태별 화면 분기, 파일 업로드/다운로드 예외 처리 등 실제 운영 업무와 연결된 프론트엔드 기능을 개발했습니다.",
    role: "프론트엔드 개발 · 운영 화면 설계 · 인증/권한 흐름 구현",
    achievements: [
      "이메일 스레드에 분산되던 파일 제출·검토·승인·정산 업무 흐름을 플랫폼 내 화면으로 구조화",
      "Next.js Middleware 기반 인증 처리 및 권한별 페이지 접근 제어 구현",
      "로그인 사용자 정보 기반으로 프로젝트, Sales Channel, Subsidiary, Agency 등 접근 가능한 데이터 범위를 제한하고 화면별 드롭다운 옵션 구성",
      "권한별 메뉴/버튼 노출, 제출 상태, 검토 상태, 승인/반려 상태에 따른 화면 분기 처리",
      "제출 전, 제출 완료, 검토 중, 승인, 반려 등 업무 상태에 따라 버튼 노출, 수정 가능 여부, 다운로드 가능 여부, 안내 메시지 분기 처리",
      "반복되던 사용자 정보 조회와 옵션 가공 로직을 Zustand 기반 전역 상태와 공용 컴포넌트로 정리",
      "반복 API 호출과 로딩/에러 상태 처리를 TanStack Query로 분리해 서버 상태 관리 구조 개선",
      "Subsidiary/Year/Quarter/Agency 조건 기반 다단계 파일 업로드 모달 구현",
      "파일 업로드 실패 시 오류 안내 및 반환 파일 다운로드 흐름 구현",
      "ATB Pacing Dashboard 개발 — 다중 필터 기반 게이지 차트 및 국가별/미디어 타입별 집계 테이블 구현",
      "사내 Ubuntu 서버에서 SSH, PM2 기반 수동 배포 및 운영 담당",
    ],
    troubleshooting: [
      {
        problem:
          "사용자 권한과 소속 데이터에 따라 접근 가능한 프로젝트, Sales Channel, Subsidiary, Agency 정보가 달라져 화면마다 드롭다운 옵션과 조회 범위를 안정적으로 관리해야 했습니다.",
        solution:
          "로그인 시 내려오는 사용자 정보를 Zustand 전역 상태로 관리하고, 각 화면에서는 해당 정보를 기준으로 접근 가능한 데이터 범위와 드롭다운 옵션을 구성하도록 정리했습니다. 이를 통해 화면별로 반복되던 사용자 정보 조회와 옵션 가공 로직을 줄이고, 신규 화면 추가 시에도 일관된 방식으로 권한 기반 UI를 구성할 수 있게 했습니다.",
      },
      {
        problem:
          "제출 전, 제출 완료, 검토 중, 승인, 반려 등 업무 상태에 따라 사용자가 할 수 있는 액션이 달라져 잘못된 상태에서 수정이나 제출이 발생할 가능성이 있었습니다.",
        solution:
          "상태값을 기준으로 버튼 노출, 수정 가능 여부, 다운로드 가능 여부, 안내 메시지를 분기하고, API 호출 전에도 필요한 값과 상태를 한 번 더 검증하도록 구성했습니다. 이를 통해 사용자가 현재 업무 단계에서 가능한 액션만 수행할 수 있도록 화면 흐름을 안정화했습니다.",
      },
      {
        problem:
          "파일 업로드 시 백엔드 검증에 실패하면 단순 실패 메시지만으로는 사용자가 어떤 데이터를 수정해야 하는지 파악하기 어려웠습니다.",
        solution:
          "업로드 실패 응답을 화면에 구조화해 표시하고, 오류 내역이 담긴 반환 파일을 다운로드할 수 있도록 처리했습니다. 사용자가 실패 원인을 확인하고 수정 후 다시 업로드할 수 있는 흐름을 만들어 운영 업무가 중단되지 않도록 개선했습니다.",
      },
    ],
    thumbnail: "/images/projects/artihub-thumb.png",
    images: [
      "/images/projects/artihub-1.png",
      "/images/projects/artihub-2.png",
    ],
  },
  {
    slug: "ghost-blog-automation",
    title: "Ghost 기반 블로그 발행 자동화 툴 개발",
    company: "아티언스",
    companyPeriod: "2024.11 – 현재",
    period: "2026.05 – 2026.06",
    stack: [
      "Next.js",
      "TypeScript",
      "Ghost Admin API",
      "Gemini API",
      "Ubuntu",
      "SSH",
      "PM2",
    ],
    summary:
      "회사 공식 홈페이지 블로그 발행 요청이 개발자에게 반복적으로 집중되는 문제를 해결하기 위해 Ghost 기반 내부 자동화 툴 Autoblog를 개발했습니다. 메타데이터 추출, HTML 변환, Ghost 입력, 발행 요청으로 분산되어 있던 블로그 발행 준비 과정을 단일 입력 흐름으로 통합하고, 콘텐츠 작성자 기준 준비 단계를 5단계에서 1단계로 줄였습니다.",
    role: "프론트엔드 단독 개발 · API 연동 · 사내 서버 배포",
    achievements: [
      "블로그 발행 요청이 개발자에게 반복 집중되는 문제를 발견하고 Ghost 기반 내부 자동화 툴 Autoblog 주도 개발",
      "메타데이터 추출, HTML 변환, Ghost 입력, 발행 요청으로 분산되어 있던 블로그 발행 준비 과정을 단일 입력 흐름으로 통합",
      "콘텐츠 작성자 기준 발행 요청 준비 단계를 5단계에서 1단계로 단축",
      "Ghost Admin API 연동 및 JWT 인증 처리 구현",
      "Gemini API 기반 제목, Slug, 태그, Meta Title, Meta Description 자동 생성 기능 구현",
      "게시물 제목, Slug, 본문 HTML, 이미지, 태그, 카테고리 입력 화면 개발",
      "HTML 콘텐츠와 이미지 삽입 정보를 함께 관리해 수동 img 태그 삽입 및 전달 누락 가능성 감소",
      "실제 홈페이지 CSS 기반 발행 전 미리보기 제공",
      "Ghost Admin API 기반 게시물 생성 요청 및 성공/실패 상태 처리",
      "Vercel 개발 환경에서 사내 Ubuntu 서버 운영 환경으로 이전하고 SSH 기반 배포 및 PM2 프로세스 운영 담당",
    ],
    troubleshooting: [
      {
        problem:
          "Ghost 관리자 화면과 실제 홈페이지에 적용되는 CSS가 달라, 작성자가 발행 전에 실제 노출 형태를 확인하기 어려웠고 발행 후 이미지 위치나 폰트 크기 관련 수정 요청이 반복될 수 있었습니다.",
        solution:
          "발행 전 본문을 홈페이지 형식에 맞는 HTML로 변환하고 실제 홈페이지 CSS가 적용된 형태로 미리 볼 수 있는 기능을 구현했습니다. 이를 통해 작성자가 발행 전 화면을 확인하고 수정할 수 있는 흐름을 만들었습니다.",
      },
      {
        problem:
          "Ghost Admin API를 클라이언트에서 직접 호출하면 Admin API Key가 노출될 수 있는 문제가 있었습니다.",
        solution:
          "서버 측에서 Ghost JWT를 생성하고 API 요청을 처리하도록 구성해 인증 정보를 클라이언트에 노출하지 않도록 개선했습니다.",
      },
      {
        problem:
          "노션 등 외부 문서에서 본문을 복사해올 때 이미지가 실제 업로드 이미지가 아니라 로컬 참조 형태로 들어와 Ghost 발행 시 누락될 가능성이 있었습니다.",
        solution:
          "본문 작성 흐름과 이미지 첨부 흐름을 분리하고, Ghost에 등록할 이미지는 별도 업로드 후 본문에 삽입하는 방식으로 정리했습니다. 이를 통해 이미지 누락 가능성을 줄이고 발행 전 확인 가능한 구조를 만들었습니다.",
      },
    ],
    thumbnail: "/images/projects/ghost-blog-thumb.png",
    images: [
      "/images/projects/ghost-blog-1.png",
      "/images/projects/ghost-blog-2.png",
      "/images/projects/ghost-blog-3.png",
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
      "GEO Intelligence는 생성형 AI 검색 환경에서 브랜드와 콘텐츠가 어떻게 노출되고 인용되는지 분석하기 위한 서비스입니다. AI Query Fan-Out, GEO Analyzer, GEO Citation Tracker, GEO Entity Similarity 등 분석 목적별 화면을 개발하고, 수치 데이터와 분석 리포트를 비개발자도 이해하기 쉬운 형태로 재구성했습니다.",
    role: "프론트엔드 개발 · 분석 화면 UI 구성 · SVG 차트 구현",
    achievements: [
      "GEO Citation Tracker 모니터 설정 화면 개발 — 콘텐츠 URL, 키워드, 프롬프트 항목을 개수 제한 내에서 동적으로 추가·삭제하고 복수 AI 모델과 실행 시간 슬롯을 다중 선택할 수 있는 설정 폼 구현",
      "AI Query Fan-Out 화면 개발 — Target Prompt 기준 연관 쿼리를 Entity-Expanded, Reformulation, Implicit, Related 카테고리로 분류해 표시하고 Sources & Citations를 출처별로 정리",
      "GEO Analyzer 분석 결과를 점수, 카테고리, 개선 가이드 형태로 재구성해 비개발자도 이해하기 쉬운 화면 제공",
      "GEO Entity Similarity 화면 개발을 통해 엔티티 유사도 분석 결과를 시각적으로 확인할 수 있도록 구성",
      "Citation Tracker의 프롬프트별 통계, 모델 필터, 일자별 인용률 화면 개발",
      "Citation Tracker용 커스텀 차트를 라이브러리 없이 SVG로 직접 구현해 날짜별 URL 인용률, 키워드 언급률 등 추세 데이터 시각화",
      "마크다운 기반 분석 리포트 렌더링 처리",
      "요구사항을 HTML 프로토타입으로 구체화한 뒤 화면 설계부터 개발까지 담당",
    ],
    troubleshooting: [
      {
        problem:
          "분석 결과가 텍스트 리포트, 수치 데이터, 차트 형태로 함께 제공되어 한 화면에서 정보 우선순위를 잡기 어려웠습니다.",
        solution:
          "분석 목적별로 화면을 분리하고, 핵심 지표, 상세 결과, 설명 리포트가 순차적으로 읽히도록 레이아웃을 구성했습니다. 이를 통해 사용자가 먼저 봐야 할 지표와 이후 확인해야 할 상세 내용을 구분할 수 있도록 개선했습니다.",
      },
      {
        problem:
          "Citation Tracker에서는 날짜별 URL 인용률과 키워드 언급률을 시각화해야 했지만, 요구사항에 맞는 가벼운 차트 구성이 필요했습니다.",
        solution:
          "별도 차트 라이브러리 없이 SVG 기반 커스텀 라인 차트를 구현해 필요한 지표만 가볍게 시각화했습니다. 데이터 구조와 화면 요구사항에 맞춰 툴팁, 라벨, 추세 표시를 직접 제어할 수 있도록 구성했습니다.",
      },
    ],
    thumbnail: "/images/projects/geo-thumb.png",
    images: [
      "/images/projects/geo-1.png",
      "/images/projects/geo-2.png",
      "/images/projects/geo-3.png",
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
      "LGU+ 모바일매니저 앱 내 WebView 기반 WebApp의 주요 기능을 개발했습니다. 모바일 인증, 부가서비스 가입·해지·설정, 게시판, 앱 설정 화면을 구현했으며, WebView 환경에서의 인증, 토큰 처리, API 오류 대응 등 일반 브라우저와 다른 실행 조건을 고려한 화면 흐름을 구성했습니다.",
    role: "프론트엔드 개발 · WebView 화면 개발 · API 연동",
    achievements: [
      "기존 통화도우미 앱을 확장해 고객 인증, 로그인, 부가서비스 가입/해지/설정, 게시판, 앱 설정 등을 제공하는 WebApp 개발",
      "앱 내 WebView 환경에서 React 기반 WebApp 화면을 개발하고 인증, 토큰 전달, 캐시, 오류 처리 등 일반 브라우저와 다른 실행 조건을 고려한 예외 흐름 구현",
      "모바일 인증번호 입력, 재전송, 트랜잭션 만료 등 로그인 과정의 예외 케이스 처리",
      "API 오류 발생 시 로그아웃 및 로그인 페이지 이동 등 인증 실패 흐름 개선",
      "accessToken이 쿠키에 직접 노출되지 않도록 토큰 조회 방식 개선",
      "부가서비스 가입/해지/설정 화면 및 자동응답, 통화 원격제어 기능 개발",
      "공지사항, FAQ, 이달의 혜택 게시판 및 딥링크 처리 개발",
      "기존 U+ 서버에서 자사 서버로 API 연동 마이그레이션 수행",
      "Axios interceptors 기반 전역 에러 처리 및 사용자 피드백 구조 구현",
      "React Query로 서버 상태를, Zustand로 화면 상태를 분리해 인증 및 서비스 화면 상태 관리",
      "React.memo를 활용해 불필요한 렌더링과 중복 API 호출을 줄여 화면 성능 개선",
    ],
    troubleshooting: [
      {
        problem:
          "인증번호 검증, 재전송, 트랜잭션 만료 등 로그인 과정에서 예외 케이스가 많아 사용자가 현재 상태를 이해하기 어려운 문제가 있었습니다.",
        solution:
          "인증 상태별 분기 처리를 정리하고, 오류 발생 시 로그아웃 및 로그인 페이지 이동 등 후속 동작을 명확하게 처리했습니다. 이를 통해 인증 과정에서 사용자가 다음에 어떤 행동을 해야 하는지 알 수 있도록 화면 흐름을 안정화했습니다.",
      },
      {
        problem:
          "accessToken이 쿠키에 직접 노출되는 구조는 보안 측면에서 개선이 필요했습니다.",
        solution:
          "토큰을 화면에서 직접 다루는 방식을 줄이고, 필요한 시점에 토큰 정보를 조회하는 방식으로 변경해 클라이언트 노출 범위를 줄였습니다.",
      },
      {
        problem:
          "WebView 환경은 일반 브라우저와 달리 앱 버전, 캐시, 네이티브 동작에 따라 화면 동작이 달라질 수 있어 예외 상황을 고려해야 했습니다.",
        solution:
          "앱 내 실행 환경을 고려해 인증 실패, API 오류, 페이지 이동, 딥링크 처리 등의 예외 흐름을 명확히 분기했습니다. 이를 통해 WebView 환경에서도 사용자가 끊기지 않고 다음 화면으로 이동할 수 있도록 구성했습니다.",
      },
    ],
    thumbnail: "/images/projects/lgu-mobile-manager-thumb.png",
    images: [
      "/images/projects/lgu-mobile-manager-1.png",
      "/images/projects/lgu-mobile-manager-2.png",
    ],
    imageOrientation: "portrait",
  },
  {
    slug: "kt-giga-genie",
    title: "KT 기가지니 셋톱박스 UI 개발",
    company: "파인원 커뮤니케이션즈",
    companyPeriod: "2022.09 – 2024.10",
    period: "2022.10 – 2023.06",
    stack: ["jQuery", "HTML", "CSS", "Set-top Box UI", "Remote Control UI"],
    summary:
      "KT 기가지니 셋톱박스 환경에서 동작하는 TV UI를 개발했습니다. 올레 TV에서 지니 TV로의 브랜드 전환에 맞춰 검색 및 설정 화면을 신규 GUI/UI 규격으로 재구성하고, 리모컨 방향키 입력에 따른 포커스 이동과 선택 기능을 구현했습니다.",
    role: "프론트엔드 개발 · 셋톱박스 UI 대응",
    achievements: [
      "올레 TV에서 지니 TV로의 브랜드 전환에 따른 셋톱박스 신규 UI 개발",
      "검색 결과 화면 및 설정 화면을 신규 GUI/UI 규격에 맞춰 재구성",
      "리모컨 방향키 입력에 따른 상하좌우 포커스 이동 및 선택 기능 구현",
      "최근 검색어, 동명이인 검색 팝업, TV 프로그램 리스트 UI 개선",
      "설정 메뉴 리스트의 포커스 이동 방식을 개선해 리모컨 탐색 흐름 개선",
      "단말별 화면 비율과 해상도에 맞춘 UI 대응",
      "Zeplin 기반 디자인 시안 확인 및 Jira 이슈 수정 대응",
      "일반 웹과 다른 TV/셋톱박스 환경에서 제한된 입력 방식에 맞춘 UI 구현 경험 확보",
    ],
    troubleshooting: [
      {
        problem:
          "리모컨 방향키 조작 기반 UI는 마우스 기반 웹 UI와 달리 현재 포커스 위치와 다음 이동 위치를 명확하게 제어해야 했습니다.",
        solution:
          "화면 요소별 포커스 가능 상태를 관리하고, 방향키 입력에 따라 다음 포커스 대상이 이동하도록 이벤트 흐름을 구성했습니다. 이를 통해 사용자가 리모컨만으로 화면을 탐색하고 선택할 수 있도록 구현했습니다.",
      },
      {
        problem:
          "셋톱박스 단말에서는 브라우저 환경보다 렌더링 성능과 입력 반응성이 제한적이어서 화면 조작이 무겁게 느껴질 수 있었습니다.",
        solution:
          "불필요한 DOM 조작을 줄이고, 포커스 이동 시 필요한 클래스 변경 중심으로 처리했습니다. 이를 통해 리모컨 조작 시 화면 반응성이 떨어지지 않도록 개선했습니다.",
      },
    ],
    thumbnail: "/images/projects/kt-giga-genie-thumb.png",
    images: [
      "/images/projects/kt-giga-genie-1.png",
      "/images/projects/kt-giga-genie-2.png",
      "/images/projects/kt-giga-genie-3.png",
    ],
  },
];

export const otherWorks = [
  {
    title: "회사 홈페이지 운영 및 배포 대응",
    period: "2025 – 2026.06",
    stack: [
      "Next.js",
      "CloudFront",
      "Lambda@Edge",
      "Sitemap",
      "Deployment",
    ],
    summary:
      "회사 공식 홈페이지의 서비스 페이지와 블로그 경로 운영을 지원했습니다. 정적 페이지는 CloudFront 기반으로 서빙하고, SEO가 중요한 블로그 상세 페이지는 Lambda@Edge 기반 SSR 구조로 처리되는 환경에서 라우팅, 정적 리소스, sitemap 반영, 배포 후 확인 작업을 수행했습니다.",
    achievements: [
      "CloudFront Behavior 설정 및 서비스/블로그 경로 운영 대응",
      "sitemap.xml 최신화 및 검색 노출을 위한 기본 구조 반영",
      "블로그 상세 페이지의 SEO 메타 정보와 HTML 응답 구조 확인",
      "배포 후 정적 리소스, 라우팅, 캐시 관련 이슈 확인 및 대응",
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