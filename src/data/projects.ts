export interface Metric {
  value: string;
  label: string;
}

export interface CaseStep {
  label: string;
  text: string;
}

/** 문제 해결과 결정 기록. 왜 그렇게 골랐는지가 핵심이다. */
export interface Story {
  title: string;
  problem: string;
  decision: string;
  why?: string;
  result?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  period: string;
  role: string;
  stack: string[];
  summary: string;
  featured?: boolean;
  metrics?: Metric[];
  caseSteps: CaseStep[];
  achievements: string[];
  stories: Story[];
  thumbnail?: string;
  caption?: string;
  images: string[];
  imageOrientation?: "landscape" | "portrait";
  /** 화면 캡처가 없을 때 보여줄 흐름 */
  flow?: string[];
}

export const projects: Project[] = [
  {
    slug: "artihub",
    title: "ArtiHub",
    subtitle: "18개국이 쓰는 광고 증빙·정산 플랫폼",
    company: "아티언스",
    period: "2024.11 – 현재",
    role: "프론트엔드 단독 개발(백엔드 1명과 협업) · 인증/권한 구조 · FAQ 챗봇 기획·개발",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Zustand",
      "Vitest",
      "React Testing Library",
      "AG Grid",
      "Tailwind CSS",
    ],
    summary:
      "삼성전자 18개국 법인·대행사와 사내 광고본부 약 220명이 쓰는 광고 증빙 제출·검토·승인·정산 플랫폼입니다.\n이메일로 주고받던 업무를 ATB(예산), Weekly Report, Bill-through(정산) 3개 모듈로 옮기고, 역할과 업무 상태에 따라 달라지는 흐름을 프론트엔드에서 단독으로 설계·구현했습니다.",
    featured: true,
    metrics: [
      { value: "220명", label: "18개국 법인·대행사" },
      { value: "월 100건+", label: "플랫폼에서 처리하는 증빙" },
      { value: "5종", label: "역할별 권한 구조" },
    ],
    caseSteps: [
      {
        label: "문제",
        text: "역할과 프로젝트 권한 조합이 늘수록 화면마다 분기 코드가 커짐",
      },
      {
        label: "결정",
        text: "메뉴 권한을 코드가 아닌 route.json 설정으로 빼고, 미들웨어 한 곳에서 판단",
      },
      {
        label: "결과",
        text: "Vitest 차단 정책 테스트로 권한이 바뀌어도 회귀를 바로 확인",
      },
    ],
    achievements: [
      "이메일로 주고받던 증빙 업무를 ATB·Weekly Report·Bill-through 3개 모듈로 구조화해 월 100건 이상의 증빙을 플랫폼에서 처리",
      "역할 5종 × 사용자별 프로젝트 권한을 route.json 설정으로 분리하고 Next.js 미들웨어 한 곳에서 접근을 판단. 역할별 차단 정책을 Vitest 테스트로 고정",
      "백엔드 자동 검증(확장자, 국가·시기 파일명, 필수 시트·헤더, 표준 값·날짜·숫자 형식)과 연동한 업로드 흐름 구현. 실패 시 오류 칸이 표시된 반환 파일 다운로드와 재업로드 제공",
      "사내 재무팀과 사업부가 엑셀 파일로 주고받던 빌링 관리 업무를 Bill-through 모듈로 옮겨, 파일 전달을 없애고 버전 혼동·수기 입력 실수를 줄임. 두 부서가 플랫폼의 정산 데이터와 진행 현황을 같은 화면에서 확인",
      "완료된 ATB가 있어야 정산 증빙을 올릴 수 있는 선행 조건, 제출부터 반려까지 상태별 버튼·수정·다운로드 가능 여부를 화면에서 분기",
      "사용자 생성·삭제, 권한 설정, 비밀번호 재발급을 지원하는 관리자 화면을 구축해, 사업부가 백엔드 개발자에게 요청하던 사용자 관리 업무를 직접 처리하도록 전환",
      "사내 Semantic Search를 연동한 FAQ 챗봇 기획·개발. 지식 문서 7종과 30문항 평가 질문셋을 직접 설계하고, Route Handler 프록시로 API 토큰을 숨김",
      "401 응답 시 토큰을 재발급하고 원 요청을 재시도하는 공통 HTTP 클라이언트, 세션 만료 이벤트 중복 발생 방지",
      "컴포넌트마다 반복되던 사용자 정보 조회를 Zustand persist 전역 스토어로 통합",
      "다중 필터 기반 게이지 차트와 국가별·미디어 타입별 집계 테이블을 갖춘 ATB Pacing Dashboard 구현",
    ],
    stories: [
      {
        title: "권한 분기를 코드에서 설정으로 옮기기",
        problem:
          "관리자·일반 사용자·부서별 담당자 등 역할이 5종이고, 같은 역할이라도 사용자마다 열린 프로젝트(ATB, Weekly, Bill-through)가 다릅니다. 화면마다 조건문으로 막다 보니 메뉴 하나를 추가할 때마다 여러 곳을 고쳐야 했습니다.",
        decision:
          "메뉴와 하위 경로를 역할별로 route.json에 정의하고, 미들웨어가 요청마다 사용자의 역할과 프로젝트로 허용 경로 집합을 만들어 판단하도록 바꿨습니다.",
        why: "권한 변경이 코드 수정이 아니라 설정 변경이 되도록 하고, 판단하는 곳을 한 군데로 모으기 위해서입니다.",
        result:
          "역할별 차단 정책을 표 형태의 Vitest 테스트로 작성해, 정책이 바뀌면 테스트가 먼저 알려주도록 했습니다. 미들웨어는 화면 접근을 막는 용도이고, 데이터 권한은 백엔드가 토큰으로 다시 검증하는 구조입니다.",
      },
      {
        title: "검증 실패를 사용자가 고칠 수 있는 형태로",
        problem:
          "증빙 파일은 백엔드가 자동으로 검증하지만, 실패했을 때 메시지 한 줄로는 로컬 담당자가 어디를 고쳐야 하는지 알기 어려웠습니다.",
        decision:
          "실패 사유를 화면에 보여주고, 오류 칸이 표시된 반환 파일을 내려받아 고친 뒤 다시 올리는 흐름을 만들었습니다. 정산(Bill-through)은 완료된 ATB를 먼저 고르게 해서 순서가 틀린 업로드를 막았습니다.",
        result:
          "담당자가 증빙을 하나씩 열어 확인하던 작업이, 검증에 실패한 건만 검토하는 방식으로 바뀌었습니다.",
      },
      {
        title: "챗봇이 지어내지 않게 지식 문서부터 설계하기",
        problem:
          "세 제품은 이름이 비슷하지만 메뉴와 권한이 다르고, 사용자는 에러 문구를 그대로 복사해 묻습니다. 근거 없이 마감일이나 금액을 답하면 운영 사고로 이어질 수 있었습니다.",
        decision:
          "제품별로 문서를 나누고, 역할 × 메뉴 표와 화면 오류 문구 → 조치 표를 넣었습니다. 문서에 없는 마감일·금액·예외는 만들지 않고 관리자에게 안내하라는 응답 규칙도 문서에 담았습니다.",
        why: "RAG 답변의 품질은 검색 엔진보다 근거 문서의 구조에 크게 좌우되기 때문입니다.",
        result:
          "여러 문서를 넘나드는 질문과 역할 함정 질문으로 30문항 평가셋을 만들어, 문서를 고칠 때마다 답변을 대조합니다.",
      },
      {
        title: "백엔드에 요청하던 사용자 관리를 화면으로",
        problem:
          "사용자 생성, 권한 설정, 비밀번호 재발급, 삭제를 할 때마다 사업부가 백엔드 개발자에게 요청해야 했습니다.",
        decision:
          "사용자 관리와 권한 관리 탭을 갖춘 관리자 화면을 만들고, 되돌리기 어려운 삭제는 계정명이 보이는 확인 팝업을 거치게 했습니다.",
        result: "사업부가 개발자를 거치지 않고 직접 처리합니다.",
      },
    ],
    thumbnail: "/images/projects/artihub-faq-chatbot.png",
    caption: "모듈별 FAQ와, 가이드·FAQ 문서를 근거로 답하는 사내 Semantic Search 연동 챗봇",
    images: [
      "/images/projects/artihub-1.png",
      "/images/projects/artihub-2.png",
      "/images/projects/artihub-faq-chatbot.png",
    ],
  },
  {
    slug: "autoblog",
    title: "AutoBlog",
    subtitle: "개인용 도구에서 전사 서비스로",
    company: "아티언스",
    period: "2026.05 – 현재",
    role: "문제 발굴부터 기획·개발·운영까지 단독 · 전사 사용 교육",
    stack: [
      "Next.js",
      "TypeScript",
      "Gemini API",
      "Ghost Admin API",
      "GA4 · Search Console API",
      "AWS Lambda",
      "NGINX · PM2",
    ],
    summary:
      "블로그 작성부터 발행, 성과 확인까지 한 흐름으로 묶은 사내 서비스입니다.\n개발자에게 요청해야 했던 블로그 발행을 직원이 직접 할 수 있게 만들려고 개인용 도구로 시작했고, 팀장 제안으로 전사에 도입된 뒤 직원과 경영진 피드백을 반영해 확장했습니다.",
    featured: true,
    metrics: [
      { value: "6곳 → 1곳", label: "발행에 거치던 도구·사이트" },
      { value: "30명+", label: "전사 교육에서 활용" },
      { value: "40편+", label: "도입 후 누적 발행" },
    ],
    caseSteps: [
      {
        label: "문제",
        text: "Ghost와 홈페이지 CSS가 달라 발행 후 수정 요청이 반복되고, 발행 정보는 Teams로 받아 직접 입력",
      },
      {
        label: "결정",
        text: "실제 CSS 미리보기와 블록 편집기, 한 화면 입력과 자동 알림으로 흐름 통합",
      },
      {
        label: "결과",
        text: "초안 붙여넣기부터 발행 신청까지 약 2분",
      },
    ],
    achievements: [
      "사용 가이드를 작성하고 전사 사용 교육을 직접 진행. SEO/GEO 전사 교육에서 직원 30명 이상이 활용했으며, 서비스 도입 후 누적 40편 이상 발행",
      "실제 홈페이지 CSS를 적용한 미리보기와 HTML을 블록 단위로 다루는 편집기로, 발행 후 반복되던 레이아웃 수정 요청을 발행 전에 해결",
      "제목·메타 태그 생성 Gem, 썸네일 생성 Gem, 다른 AI 도구, Ghost, 회사 홈페이지, 담당자 메시지까지 6곳을 오가던 발행 과정을 한 화면으로 통합. 저장과 동시에 담당자에게 알림이 가도록 처리",
      "Gemini 기반으로 제목·메타 정보와 누락된 콘텐츠 구성 요소를 추천하고, 필수 항목 검증으로 미입력 상태의 발행을 차단. AI 호출 실패 시 대체 문구 제공",
      "GA4와 Search Console로 나뉘어 있던 성과 데이터를 글 단위로 합친 대시보드. 지표마다 쉬운 설명을 붙여 마케팅을 모르는 직원도 확인",
      "Ghost 웹훅·AWS Lambda 기반 변경 알림과 sitemap 자동 갱신, updatedAt 기반 동시 수정 충돌 방지",
      "매주 수작업으로 옮기던 LinkedIn 뉴스레터를 Ghost 초안으로 자동 변환하는 파이프라인 (slug 기준 중복 방지, 썸네일 생성, 링크 추적 파라미터 제거, Google Chat 알림)",
      "Schema Markup 자동 생성, H2 목차 미리보기와 실제 블로그 자동 목차 연결",
      "Ghost Admin API JWT를 서버에서 서명해 Admin Key를 브라우저에 노출하지 않도록 처리",
      "개인용으로 Vercel에 배포했던 서비스를 전사 도입에 맞춰 AWS(NGINX, PM2)로 이전",
    ],
    stories: [
      {
        title: "발행 후 수정 요청을 발행 전으로 당기기",
        problem:
          "Ghost 관리자 화면과 실제 홈페이지는 적용되는 CSS가 달라서, 발행 후에야 \"이미지 위치가 이상해요\", \"글자 크기가 달라요\" 같은 요청이 왔습니다. HTML을 직접 고쳐 대응하자 이번엔 태그가 빠지거나 스타일이 틀어지는 실수가 생겼습니다.",
        decision:
          "실제 홈페이지 CSS로 미리 보는 화면을 만들고, HTML을 직접 고치는 대신 블록 단위로 파싱해 편집한 뒤 템플릿별로 다시 생성하는 구조로 바꿨습니다.",
        result: "작성자가 발행 전에 실제 모습을 확인하고 직접 고칩니다.",
      },
      {
        title: "권한을 열어둬야 하는 환경에서의 안전장치",
        problem:
          "경영진 요구로 전 직원이 다른 사람의 글까지 수정할 수 있어야 했습니다. 작성자 기준으로 권한을 막는 일반적인 방법을 쓸 수 없었습니다.",
        decision:
          "Ghost 웹훅을 AWS Lambda로 받아 글이 바뀌면 담당자에게 알림을 보내고 sitemap을 갱신했습니다. 저장할 때는 updatedAt을 함께 보내, 두 사람이 같은 글을 동시에 고치면 뒤에 저장한 쪽이 앞사람의 수정을 덮어쓰지 않게 했습니다.",
        why: "수정 자체를 막을 수 없다면, 바뀐 것을 바로 알아채고 덮어쓰기만은 막는 것이 현실적인 보완이라고 판단했습니다. 사내 IP로만 접근할 수 있어 외부 위험은 따로 차단돼 있습니다.",
        result:
          "다음 단계로 수정 이력 저장과 발행된 글 수정 승인을 검토하고 있습니다.",
      },
      {
        title: "AI 추천이 실패해도 흐름은 끊기지 않게",
        problem:
          "제목·메타 정보 작성을 어려워하는 직원이 많았지만, AI 응답은 실패하거나 비어 있을 수 있습니다.",
        decision:
          "Gemini 추천은 초안으로만 제공하고, 필수 항목 검증으로 미입력 상태의 발행을 막았습니다. AI 호출이 실패하면 대체 문구를 채워 작성을 계속할 수 있게 했습니다.",
        why: "AI는 작성을 돕는 도구이지 발행을 막는 단계가 되어서는 안 된다고 봤습니다.",
      },
      {
        title: "GA4를 몰라도 내 글 성과를 볼 수 있게",
        problem:
          "GA4는 직원들이 보기 어려워했고, 방문 데이터(GA4)와 검색 데이터(Search Console)는 서로 다른 곳에 있었습니다.",
        decision:
          "두 데이터를 글 주소 기준으로 합쳐 게시물마다 노출·클릭·CTR·사용자·조회수를 한 줄에 보여주고, 지표마다 쉬운 설명을 붙였습니다. 두 서비스의 조회 가능 기간이 달라서(최대 14개월, 16개월) 이를 화면에 안내했고, 검색어에서 유입 글로 바로 이어지게 했습니다.",
        result:
          "경영진·마케팅팀뿐 아니라 마케팅을 모르는 직원도 자기 글의 노출과 유입을 확인합니다.",
      },
    ],
    thumbnail: "/images/projects/autoblog-dashboard-1.png",
    caption: "GA4와 Search Console을 글 단위로 합치고 지표마다 쉬운 설명을 붙인 성과 대시보드",
    images: [
      "/images/projects/autoblog-editor-1.png",
      "/images/projects/autoblog-editor-2.png",
      "/images/projects/autoblog-dashboard-1.png",
      "/images/projects/autoblog-dashboard-2.png",
      "/images/projects/ghost-blog-3.png",
    ],
  },
  {
    slug: "a-bit",
    title: "A-BiT",
    subtitle: "진행률 0%의 원인을 추적하다",
    company: "아티언스",
    period: "2026.07 – 현재",
    role: "인수 후 운영 · 개발실 2명 중 기능 개발과 수정 전담 · 신규 기능 제안",
    stack: ["React", "TypeScript", "Vite", "Firebase"],
    summary:
      "엑셀로 운영하던 OKR을 옮긴 전사 OKR·CFR 플랫폼입니다. 타 본부에서 만들어 개발실로 넘어온 서비스를 인수해 운영하고 있으며, 전사 50명 이상이 사용합니다.",
    featured: true,
    metrics: [{ value: "50명+", label: "전사 사용" }],
    caseSteps: [
      { label: "문제", text: "리더 화면에서 팀원 진행률이 0%로 표시" },
      {
        label: "원인",
        text: "CFR은 제출 시점 스냅샷을 쓰는데, OKR 체크인 없이 CFR을 작성",
      },
      {
        label: "결과",
        text: "체크인 전 작성 시 임시저장·안내로 재발 방지, 조사 중 버그 2건 추가 수정",
      },
    ],
    flow: [
      "리더 화면: 팀원 진행률 0%",
      "CFR은 실시간 값이 아닌 제출 시점 스냅샷",
      "OKR 체크인 없이 CFR을 먼저 작성",
      "체크인 전 작성 시 임시저장 + 안내",
    ],
    achievements: [
      "OKR 기간과 별도로 CFR(체크인) 기간을 설정하는 기능을 직접 제안·설계. 상태(Not Open·Open·Closed)는 기간에 따라 자동 전환되고, 예외 일정은 운영자가 수동으로 조정",
      "리더 화면 진행률 0% 문제의 원인을 스냅샷 구조에서 찾아 체크인 흐름을 바꾸고, 조사 중 진행률 버그 2건(재제출 값 고정, ISO가 아닌 날짜 형식)을 추가로 수정",
      "분기·라운드 전환 시점에 기본 기간이 다음 기간으로 잡히던 문제를 기간 정의 확장과 이전 라운드 우선 표시로 해결하고, 잘못 입력된 데이터를 이관",
      "Period Setup에 \"Next OKR 수립\" 기간 추가, 현업 요청을 반영한 KR 측정 단위 오입력 알림",
      "로그아웃 후 새 탭에서 로그인하면 무한 로딩되던 문제를, 인증 확인 전에 보낸 요청이 실패하면 인증 완료 후 다시 요청하도록 수정",
      "권한 없는 사용자가 URL로 리더 화면에 접근하면 메인으로 리디렉션",
      "리더 기록 팝업에 체크인 히스토리가 섞이던 문제, 진행률 바와 상태 라벨 색 불일치 수정",
      "인수인계 문서를 작성해 운영 구조와 주의사항 정리",
    ],
    stories: [
      {
        title: "진행률 0%: 증상이 아니라 데이터 구조에서 원인 찾기",
        problem:
          "임원 리더 화면의 Feedback 카드와 CFR 기록 팝업에서 팀원들의 진행률이 0%로 보인다는 문의가 들어왔습니다.",
        decision:
          "화면 코드부터 고치지 않고 데이터 흐름을 따라갔습니다. CFR은 실시간 진행률이 아니라 제출 시점의 스냅샷을 저장하는데, My OKR에서 체크인하지 않고 CFR부터 작성한 사람이 있었습니다. 코드 버그가 아니라 작성 순서 문제였기 때문에, 체크인 전에 CFR을 쓰면 임시저장하고 안내하도록 흐름을 바꿨습니다.",
        result:
          "조사하면서 별도 버그 2건을 더 찾았습니다. CFR을 재제출해도 리더 카드 진행률이 첫 제출값에 고정되던 코드, 그리고 라운드 종료 후 미체크인 팀원 경로가 참조하는 KR 이력 날짜가 ISO 형식이 아니어서 전원 0%가 되던 문제입니다. 둘 다 수정했습니다.",
      },
      {
        title: "날짜 경계에서 생기는 문제를 기간 정의로 풀기",
        problem:
          "10월 1일이 되자 기본 분기가 다음 분기로 잡혀 지난 분기 CFR을 쓸 수 없게 됐고, 라운드가 넘어간 뒤에는 많은 사람이 이전 라운드 CFR을 새 라운드에 작성했습니다.",
        decision:
          "분기 기간을 \"OKR 수립 시작일 ~ 마지막 Round CFR 종료일\"로 넓히고, 새 라운드 기간에는 이전 라운드 CFR이 먼저 보이도록 했습니다. 잘못된 라운드에 입력된 데이터는 올바른 라운드로 옮겼습니다.",
        why: "달력의 분기와 업무상 분기가 다르다는 게 원인이라, 화면 기본값만 바꾸기보다 기간 정의 자체를 업무에 맞췄습니다.",
      },
      {
        title: "CFR 기간 설정 기능을 제안하다",
        problem:
          "OKR 기간만 있어서 체크인을 언제 열고 닫을지 통제할 방법이 없었습니다.",
        decision:
          "OKR 기간과 별도로 CFR 시작·종료일을 설정하는 기능을 제안했습니다. 상태는 Not Open → Open → Closed로 기간에 맞춰 자동으로 바뀌고, 운영자가 수동으로 덮어쓸 수 있습니다. 기간 밖에 접속하면 Archive 탭으로 보내고 종료 안내를 보여줍니다.",
        why: "대부분은 일정대로 돌아가지만 예외 일정이 생기기 때문에, 기본은 자동으로 두고 예외만 운영자가 조정하도록 했습니다.",
      },
      {
        title: "로그인 직후 무한 로딩",
        problem:
          "로그아웃한 뒤 새 탭에서 로그인하면 화면이 계속 로딩되는 문제가 있었습니다.",
        decision:
          "Firebase 인증 확인이 끝나기 전에 데이터를 먼저 요청해 실패하고, 로그인 이후 다시 요청하지 않는 것이 원인이었습니다. 인증 확인 전 요청이 실패하면 인증이 끝난 뒤 다시 요청하도록 고쳤습니다.",
      },
    ],
    thumbnail: "/images/projects/a-bit-cfr.png",
    caption: "제출 시점 스냅샷으로 보관되는 라운드별 CFR 리포트와 리더 피드백",
    images: [
      "/images/projects/a-bit-okr.png",
      "/images/projects/a-bit-cfr.png",
    ],
  },
  {
    slug: "homepage",
    title: "공식 홈페이지·블로그",
    subtitle: "블로그 Lambda SSR 전환과 운영",
    company: "아티언스",
    period: "2025.11 – 현재",
    role: "배포·운영, SSR 전환, 기술 SEO 개선",
    stack: [
      "AWS S3 · CloudFront",
      "CloudFront Functions",
      "AWS Lambda",
      "Ghost Content API",
      "Playwright",
    ],
    summary:
      "외주가 디자인·퍼블리싱한 회사 공식 홈페이지(한/영)를 넘겨받아 배포하고, 블로그 영역을 SSR로 전환해 운영하고 있습니다.",
    caseSteps: [
      {
        label: "문제",
        text: "SPA 블로그의 초기 HTML에 메타 정보와 본문이 없음",
      },
      {
        label: "결정",
        text: "정적 사이트는 그대로 두고 블로그·케이스 스터디만 Lambda SSR로 전환",
      },
      { label: "결과", text: "서버 응답에 메타 정보와 본문을 포함" },
    ],
    flow: [
      "SPA 블로그: 초기 HTML에 본문 없음",
      "정적 사이트는 S3·CloudFront 그대로",
      "블로그·케이스 스터디만 Lambda SSR",
      "서버 응답에 메타 정보와 본문 포함",
    ],
    achievements: [
      "초기 HTML에 메타 정보와 본문이 없던 블로그·케이스 스터디를 Lambda SSR로 전환해 서버 응답에 콘텐츠를 포함하도록 개선. 기존 정적 사이트 구조는 유지하고 콘텐츠 영역에만 적용",
      "주요 메뉴의 랜딩 페이지 13개에 한정된 XML sitemap을 전체 콘텐츠 경로로 확장하고, non-www → www 리디렉트로 도메인별 중복 URL 통합",
      "블로그 상세 페이지의 500 오류를 유발하던 연관 글 요청 실패와 발행일 누락에 대응해, 병렬 요청별 실패 격리 및 null 처리 적용",
      "S3·CloudFront 기반 배포 환경과 CloudFront Functions 리디렉트를 구성하고, Playwright E2E로 배포 후 주요 사용자 흐름 검증",
      "블로그 작성자 정보와 콘텐츠 탐색 UX 개편",
    ],
    stories: [
      {
        title: "전체를 바꾸지 않고 필요한 영역만 SSR로",
        problem:
          "블로그는 브라우저에서 Ghost API를 불러와 그리는 SPA여서, JavaScript를 실행하기 전의 HTML에는 head 정보도 본문도 없었습니다. Search Console 렌더링 테스트에서도 JavaScript 렌더링을 마친 뒤에야 콘텐츠를 볼 수 있었습니다.",
        decision:
          "사이트 전체를 프레임워크로 다시 만드는 대신, 정적 사이트는 S3·CloudFront에 그대로 두고 블로그와 케이스 스터디 경로만 Lambda에서 HTML을 만들어 응답하도록 바꿨습니다.",
        why: "외주가 만든 정적 사이트를 유지하면서 문제가 있는 콘텐츠 영역만 고치는 것이 변경 범위와 위험을 가장 줄이는 방법이었습니다.",
        result: "서버 응답에 메타 정보와 본문이 포함됩니다.",
      },
      {
        title: "콜드 스타트 때만 나던 500 에러",
        problem:
          "오랜만에 접속하면 특정 블로그 글에서 500 에러가 났습니다.",
        decision:
          "원인은 두 가지였습니다. 발행일이 없는 글에서 문자열 처리 중 에러가 났고, 이전·다음 글을 Promise.all로 함께 불러오다 Lambda 콜드 스타트로 Ghost 응답이 늦으면 하나의 실패가 전체 실패로 번졌습니다. null 처리를 추가하고, 요청마다 실패를 따로 받아 빈 값으로 대체하도록 바꿨습니다.",
        result: "연관 글 요청이 실패해도 본문 페이지는 정상적으로 열립니다.",
      },
    ],
    images: [],
  },
  {
    slug: "semantic-search",
    title: "Semantic Search",
    subtitle: "사내 AI 검색 채팅 서비스",
    company: "아티언스",
    period: "2026.01 – 2026.08",
    role: "서비스 기획 · 화면 및 사용자 흐름 설계 · 프론트엔드 개발",
    stack: ["Next.js", "TypeScript", "Zustand", "SSE", "Google Drive API"],
    summary:
      "사내 문서·DB 등 여러 데이터 소스를 AI로 검색하고 답변하는 채팅형 검색 서비스입니다.\n기획부터 화면 설계, HTML 프로토타입, 프론트엔드 개발까지 담당했고, 이후 Help Desk 챗봇과 ArtiHub FAQ 챗봇으로 활용 범위를 넓혔습니다.",
    featured: true,
    metrics: [
      { value: "3종", label: "검색 방식 (File·DB·Agentic)" },
      { value: "2개", label: "챗봇으로 확장 (Help Desk·FAQ)" },
    ],
    caseSteps: [
      {
        label: "문제",
        text: "POST 요청과 인증 헤더가 필요한 스트리밍 응답",
      },
      {
        label: "결정",
        text: "EventSource 대신 fetch ReadableStream 기반 SSE 파서를 직접 구현",
      },
      {
        label: "결과",
        text: "생성 중·완료 상태를 나눠 마크다운·표·코드·파일 응답을 렌더링",
      },
    ],
    achievements: [
      "File Search, DB Search, Agentic Search의 메뉴 구조와 질문 흐름 기획, HTML 프로토타입으로 이해관계자와 방향 조율",
      "POST 요청과 인증 헤더가 필요해 EventSource 대신 fetch ReadableStream 기반 SSE 파서를 직접 구현",
      "응답 생성 중·완료 상태를 나눠 마크다운, 표, 코드, 이미지 미리보기, 파일 다운로드 카드 등 복합 응답 렌더링",
      "에이전트가 생성 도중 되묻는 질문(선택형·자유 입력)에 답하면 run_id로 스트림을 이어가는 Human-in-the-loop 흐름 구현",
      "기존 File Search를 재사용해 Google Workspace 전환 문의용 Help Desk 챗봇으로 확장, 목적별 Workspace 진입 화면 구현",
      "채팅방 생성·히스토리·제목 변경·삭제 등 대화 관리, Google Drive 연동과 동기화 상태 UI",
      "DB Search 운영 설정 화면(글로벌 규칙, 테이블 필터, 분석 템플릿)과 '/'·'@' 슬래시 커맨드 입력",
    ],
    stories: [
      {
        title: "EventSource 대신 SSE 파서를 직접 만든 이유",
        problem:
          "검색 질문은 본문이 큰 POST 요청이고 인증 헤더도 필요했지만, 브라우저의 EventSource는 GET만 지원하고 헤더를 넣을 수 없습니다.",
        decision:
          "fetch로 요청하고 ReadableStream을 직접 읽어, 빈 줄 단위로 이벤트를 나누고 event·data를 파싱하는 클라이언트를 만들었습니다. 답변 조각은 이벤트 타입별로 분기해 상태에 누적했습니다.",
        why: "표준 API의 제약 때문에 요청 방식을 바꾸기보다, 스트림 파싱을 직접 책임지는 쪽을 택했습니다.",
      },
      {
        title: "스트리밍 중에도 깨지지 않는 렌더링",
        problem:
          "답변이 조각으로 오면서 표나 코드 블록이 완성되기 전에 화면에 그려져 렌더링이 불안정했습니다.",
        decision:
          "청크를 그대로 출력하지 않고 메시지 상태에 누적하며, 생성 중과 완료 상태를 분리했습니다. 본문·표·이미지·파일·출처·후속 질문은 영역을 나눠 그렸습니다.",
      },
      {
        title: "에이전트가 되묻는 대화 흐름",
        problem:
          "Agentic Search는 답변 도중 에이전트가 선택지나 자유 입력으로 되묻기 때문에, 일반 검색보다 흐름이 복잡해 사용자가 현재 상태를 놓치기 쉬웠습니다.",
        decision:
          "질문, 스트리밍, 되묻기, 선택 응답, 직접 입력을 각각의 UI 상태로 관리하고, 답을 보내면 run_id와 질문 id로 같은 실행을 이어 스트리밍하도록 구성했습니다.",
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
    slug: "lgu-mobile-manager",
    title: "LGU+ 모바일매니저",
    subtitle: "앱 안의 WebView WebApp",
    company: "파인원 커뮤니케이션즈",
    period: "2023.08 – 2024.09",
    role: "WebView 기반 프론트엔드 개발 · Native Bridge 연동 · 인증 흐름",
    stack: [
      "React",
      "TypeScript",
      "React Query",
      "Zustand",
      "Axios",
      "WebView",
      "Native Bridge",
    ],
    summary:
      "기존 통화도우미 앱을 확장해 고객 인증, 부가서비스 가입·해지·설정, 게시판 등을 제공하는 LGU+ 앱 내 React WebApp입니다. 일반 브라우저와 다른 WebView 실행 조건을 고려해 인증과 서비스 흐름을 구현했습니다.",
    caseSteps: [
      { label: "문제", text: "서버가 인증번호 만료 시각을 내려주지 않음" },
      {
        label: "결정",
        text: "1초씩 줄이는 타이머 대신 요청 시각을 저장해 남은 시간을 다시 계산",
      },
      {
        label: "결과",
        text: "화면 이동이나 앱 재실행에도 재전송 제한과 만료가 정확히 유지",
      },
    ],
    achievements: [
      "서버가 인증번호 만료 시각을 주지 않는 구조에서, 요청 시각을 저장해 남은 시간을 다시 계산하는 방식으로 재전송 제한(1분)과 만료(3분) 처리",
      "Native Bridge로 받은 단말 정보를 기준으로 하나의 코드베이스에서 서비스별 UI를 분기 렌더링",
      "기존 U+ 서버에서 자사 서버로 API 연동 마이그레이션, Axios interceptors 기반 전역 에러 처리와 사용자 피드백 구조 구현",
      "API 인증 오류 시 로그인 상태를 초기화하고 재인증으로 연결하는 인증 실패 흐름 개선",
      "모바일 인증번호 입력, 재전송, 트랜잭션 만료 등 로그인 예외 케이스 처리",
      "부가서비스 가입·해지·설정, 자동응답, 통화 원격제어, 공지사항·FAQ·혜택 게시판과 딥링크 처리 개발",
      "React Query로 서버 상태를, Zustand로 화면 상태를 분리해 관리",
    ],
    stories: [
      {
        title: "서버가 주지 않는 만료 시각을 클라이언트에서",
        problem:
          "서버가 인증번호의 만료 시각을 내려주지 않았고, WebView에서는 앱이 백그라운드로 가거나 다른 화면에 다녀오면 1초씩 줄이는 타이머가 멈추거나 밀렸습니다.",
        decision:
          "인증을 요청한 시각을 스토리지에 저장하고, 화면에 보여줄 때마다 \"현재 시각 − 요청 시각\"으로 남은 시간을 다시 계산했습니다. 1분 안의 재요청은 막고, 3분이 지나면 폐기했습니다.",
        why: "남은 시간을 상태로 들고 있으면 실행 환경에 따라 어긋나지만, 기준 시각만 저장하면 언제 다시 계산해도 같은 값이 나오기 때문입니다.",
        result:
          "클라이언트 계산은 표시와 불필요한 재요청을 줄이는 용도이고, 실제 만료 판단은 서버가 인증번호를 검증할 때 합니다.",
      },
      {
        title: "하나의 코드베이스, 서비스별 화면",
        problem:
          "같은 WebApp이라도 앱이 전달하는 단말 정보에 따라 서비스별로 다른 화면과 동작이 필요했습니다.",
        decision:
          "Native Bridge로 받은 단말 정보를 기준으로 화면과 동작을 분기하고, 공통 로직은 하나의 코드베이스에서 관리했습니다.",
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
    slug: "geo-intelligence",
    title: "GEO Intelligence",
    subtitle: "생성형 AI 검색 인용 분석 도구",
    company: "아티언스",
    period: "2026.04 – 2026.06",
    role: "서비스 기획 · 화면 설계 · 프론트엔드 개발 · 데이터 시각화",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "SVG"],
    summary:
      "자사 콘텐츠가 생성형 AI 검색에 얼마나 노출·인용되는지 모니터링하는 GEO 사업용 내부 도구입니다. 수치와 분석 결과를 비개발자도 이해하기 쉬운 화면으로 설계했습니다.",
    caseSteps: [
      { label: "문제", text: "요구사항에 맞는 가벼운 추세 차트가 필요" },
      { label: "결정", text: "차트 라이브러리 없이 SVG로 직접 구현" },
      { label: "결과", text: "툴팁·라벨·추세 표시를 데이터 구조에 맞춰 제어" },
    ],
    achievements: [
      "Citation Tracker, AI Query Fan-Out, GEO Analyzer, Entity Similarity의 화면 구조와 사용자 흐름 기획",
      "콘텐츠 URL·키워드·프롬프트를 동적으로 추가·삭제하고 복수 AI 모델과 실행 시간을 고르는 모니터 설정 화면",
      "Target Prompt 기준 연관 쿼리를 카테고리별로 분류하고 Sources & Citations를 출처별로 정리",
      "날짜별 URL 인용률·키워드 언급률 추세 차트를 차트 라이브러리 없이 SVG로 구현",
      "분석 결과를 점수·카테고리·개선 가이드 중심으로 설계",
    ],
    stories: [
      {
        title: "정보가 많은 분석 화면의 읽는 순서",
        problem:
          "분석 결과가 텍스트 리포트, 수치, 차트로 함께 제공되어 무엇부터 봐야 할지 알기 어려웠습니다.",
        decision:
          "분석 목적별로 화면을 나누고, 핵심 지표 → 상세 결과 → 설명 리포트 순서로 읽히도록 배치했습니다.",
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
    slug: "kt-giga-genie",
    title: "KT 기가지니 셋톱박스 UI",
    subtitle: "리모컨으로 조작하는 화면",
    company: "파인원 커뮤니케이션즈",
    period: "2022.10 – 2023.06",
    role: "셋톱박스 UI 개발 · 리모컨 인터랙션 · 단말 테스트와 QA 대응",
    stack: ["JavaScript", "jQuery", "HTML", "CSS"],
    summary:
      "올레 TV에서 지니 TV로의 브랜드 전환에 맞춰 셋톱박스 검색·설정 화면을 신규 규격으로 재구성하고, 리모컨 방향키 기반 포커스 이동을 구현했습니다.",
    caseSteps: [
      { label: "문제", text: "마우스 없이 방향키로만 조작하는 화면" },
      { label: "결정", text: "요소별 포커스 상태를 관리하고 방향키 이벤트로 이동" },
      { label: "결과", text: "제한된 단말 성능에서도 반응성 유지" },
    ],
    achievements: [
      "검색 결과·설정 화면을 신규 GUI 규격에 맞춰 재구성",
      "리모컨 방향키 입력에 따른 상하좌우 포커스 이동과 선택 구현",
      "최근 검색어, 동명이인 검색 팝업, TV 프로그램 리스트 UI 개선",
      "다양한 셋톱박스 단말에서 직접 테스트하며 화면 표시 QA 대응",
    ],
    stories: [
      {
        title: "제한된 단말에서의 반응성",
        problem:
          "셋톱박스는 브라우저보다 렌더링 성능이 낮아 조작이 무겁게 느껴질 수 있었습니다.",
        decision:
          "불필요한 DOM 조작을 줄이고, 포커스 이동 시 클래스 변경 중심으로 처리했습니다.",
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
    title: "SEO/GEO 성과 대시보드",
    period: "SI본부",
    summary: [
      "삼성전자 30개국 법인·로컬 담당자가 보는 Looker Studio 대시보드 구성",
      "TV·Monitor·Soundbar 제품군별, HQ·Local 대상별로 화면 구성",
      "BigQuery 혼합 데이터소스 관리",
    ],
  },
  {
    title: "사내 도구",
    period: "단독 개발",
    summary: [
      "개발 요청 관리 TechTok (Next.js·Prisma·Google OAuth)",
      "헬프데스크",
      "GMO 데이터 관리 도구",
    ],
  },
  {
    title: "AI 활용 개발",
    period: "2026 – 현재",
    summary: [
      "Claude Code로 개인용 도구를 빠르게 검증해 전사 서비스로 확장 (AutoBlog)",
      "기존 코드 분석과 리팩터링에 활용",
      "Playwright MCP로 배포 후 회귀 테스트",
      "AI 개발 가이드를 작성해 사내에 공유",
    ],
  },
  {
    title: "사내 교육",
    period: "2026",
    summary: [
      "'AI와 협업하기 위한 문서화' 교육 진행: CLAUDE.md·PROJECT.md로 프로젝트 정보 관리, Mermaid 워크플로우 설계",
      "AutoBlog 사용 가이드 작성, 회사 홈페이지 블로그 UX 개편 내용과 함께 전사 사용법 교육",
    ],
  },
  {
    title: "개인 프로젝트",
    period: "개인",
    heading: {
      name: "방방",
      description: "방탈출 기록·테마 찾기·뱃지 수집 웹앱 · React·Vite·TypeScript·Supabase",
    },
    summary: [
      "뱃지 규칙을 DB에 JSON으로 두어 코드 수정 없이 뱃지 추가, 판정·추천 로직은 테스트로 검증",
      "Supabase RLS로 공용 데이터는 읽기 전용, 개인 기록은 본인만 읽고 쓰도록 권한 설계",
      "테마 592개·매장 156곳 데이터 수집, 테스트가 실패하면 배포되지 않는 GitHub Actions·Vercel 파이프라인",
    ],
    link: {
      label: "GitHub",
      href: "https://github.com/yujinkim126/bangbang-escape",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getOtherProjects(): Project[] {
  return projects.filter((project) => !project.featured);
}
