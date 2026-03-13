import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "Korean Nomad Cities - 한국 노마드를 위한 도시 가이드",
  description:
    "한국에서 가장 살기 좋은 노마드 도시를 찾아보세요. 200+ 도시, 검증된 리뷰, 활발한 커뮤니티",
  keywords:
    "한국, 노마드, 도시, 디지털노마드, 원격근무, 생활비, 인터넷속도",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body className="bg-white text-text-main">{children}</body>
    </html>
  );
}
