import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "colight",
  description: "iOS 전용 프로 카메라 앱. 쉽지만 강력한 촬영과 커스텀 필터 메이커로 당신의 톤을 완성하세요.",
  keywords: ["iOS", "카메라", "프로", "필터", "사진", "colight", "iPhone"],
  authors: [{ name: "Sean Cho" }],
  creator: "Sean Cho",
  publisher: "colight",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "colight",
  },
  openGraph: {
    title: "colight",
    description: "iOS 전용 프로 카메라 앱",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "colight",
    description: "iOS 전용 프로 카메라 앱",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/sf-pro-display" />
      </head>
      <body className="font-sf-pro antialiased" suppressHydrationWarning>
        <a
          href="#main"
          className="fixed left-4 -top-10 z-[100] rounded-md bg-white px-3 py-2 text-black shadow transition-all focus:top-4 focus:outline-none"
        >
          본문으로 건너뛰기
        </a>
        {children}
      </body>
    </html>
  );
}
