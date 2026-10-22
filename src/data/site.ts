export interface CareerItem {
  company: string;
  role: string;
  period: string;
}

export const profile = {
  name: "김유진",
  label: "프론트엔드 개발자 · 경력 4년",
  intro:
    "B2B 운영 플랫폼과 사내 서비스를 만들며, 문제의 원인을 찾아 구조로 해결하고\n그 선택의 근거를 남겨 왔습니다.",
  email: "wowyj26@naver.com",
  github: "https://github.com/yujinkim126",
};

export const careers: CareerItem[] = [
  {
    company: "아티언스",
    role: "프론트엔드 개발자",
    period: "2024.11 – 현재",
  },
  {
    company: "파인원 커뮤니케이션즈",
    role: "플랫폼서비스사업부 연구원",
    period: "2022.09 – 2024.10",
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "핵심", items: ["React", "Next.js", "TypeScript", "JavaScript"] },
  { label: "상태 관리", items: ["Zustand", "React Query"] },
  {
    label: "테스트",
    items: ["Vitest", "React Testing Library", "Playwright"],
  },
  {
    label: "서버·인프라",
    items: ["AWS (S3, CloudFront, Lambda)", "Firebase", "NGINX · PM2"],
  },
  { label: "기타", items: ["SSE", "Tailwind CSS", "Looker Studio · BigQuery"] },
];
