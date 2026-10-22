import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김유진 | 프론트엔드 개발자",
  description:
    "B2B 운영 플랫폼과 사내 서비스를 만들며 문제의 원인을 찾아 구조로 해결해 온 프론트엔드 개발자 김유진의 포트폴리오",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
