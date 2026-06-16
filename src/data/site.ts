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
  "AI 기반 검색·분석 서비스와 사내 운영 플랫폼을 개발해 온 4년차 프론트엔드 개발자입니다.\n모호한 요구사항을 화면 흐름으로 정리하고, 프로토타입부터 실제 서비스 UI까지 구현하는 데 강점이 있습니다.";
  
export const TECH_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "SSE",
  "Markdown Rendering",
  "UI Prototyping",
];
