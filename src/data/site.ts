export interface CareerItem {
  company: string;
  role: string;
  period: string;
}

export const careers: CareerItem[] = [
  {
    company: "아티언스",
    role: "프론트엔드 개발자",
    period: "2024.11 – 현재",
  },
  {
    company: "파인원 커뮤니케이션즈",
    role: "프론트엔드 개발자",
    period: "2022.09 – 2024.10",
  },
];

export const INTRO_TEXT =
  "React, TypeScript, Next.js를 중심으로 B2B 운영 플랫폼, AI 검색 서비스, WebView 서비스를 개발해 온 4년차 프론트엔드 개발자입니다.\n서비스 기획과 화면·사용자 흐름 설계부터 실제 구현과 운영까지 경험하며 복잡한 요구사항을 명확한 UI와 상태 흐름으로 만드는 데 강점이 있습니다.";
export const TECH_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "SSE",
  "Markdown Rendering",
  "UI Prototyping",
];
