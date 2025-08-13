import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoLight - Create. Share. Light.",
  description: "iOS 전용 전문 카메라 앱. 쉽지만 전문적인 사진 촬영과 커스텀 필터 제작을 경험하세요.",
  keywords: ["iOS", "카메라", "필터", "사진", "CoLight", "iPhone"],
  authors: [{ name: "Sean Cho" }],
  creator: "Sean Cho",
  publisher: "CoLight",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "CoLight",
  },
  openGraph: {
    title: "CoLight - Create. Share. Light.",
    description: "iOS 전용 전문 카메라 앱",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoLight - Create. Share. Light.",
    description: "iOS 전용 전문 카메라 앱",
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
    <html lang="ko" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/sf-pro-display" />
      </head>
      <body className="font-sf-pro antialiased">
        {children}
      </body>
    </html>
  );
}
