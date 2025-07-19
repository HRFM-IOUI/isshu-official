import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import StickyNaviMenu from "@/components/StickyNaviMenu";
import FooterSection from "@/components/FooterSection";
import SideBanners from "@/components/SideBanners"; // サイドバナー
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO・OGP・アクセシビリティ・構造化データ全部入り
export const metadata: Metadata = {
  title: "菅原一秀 公式サイト",
  description: "元衆議院議員・菅原一秀の公式Webサイト。政策・ビジョン・実績・プロフィール等を掲載。",
  keywords: [
    "菅原一秀", "政治家", "公式", "練馬区", "東京18区", "政策", "実績", "国会", "衆議院議員"
  ],
  authors: [{ name: "菅原一秀事務所" }],
  openGraph: {
    title: "菅原一秀 公式サイト",
    description: "政策・ビジョン・プロフィール・実績情報を掲載。練馬・東京18区を中心に活動。",
    url: "https://isshu.online/",
    siteName: "菅原一秀 公式サイト",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "菅原一秀 公式サイトOGP画像"
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "菅原一秀 公式サイト",
    description: "元衆議院議員・菅原一秀の公式Webサイト。政策・プロフィール・実績・最新情報。",
    images: ["/ogp.png"],
    creator: "@sugawara_isshu", // 本人Twitterがあれば
  },
  alternates: {
    canonical: "https://isshu.online/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {/* favicon, apple-touch-icon, manifest, theme-color */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2273d9" />

        {/* 構造化データ JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "菅原一秀",
              url: "https://isshu.online/",
              image: "https://isshu.online/ogp.png",
              sameAs: [
                "https://x.com/sugawara_isshu",
                "https://www.instagram.com/...",
                "https://www.youtube.com/...",
              ],
              jobTitle: "元衆議院議員",
              affiliation: "自由民主党",
              address: {
                "@type": "PostalAddress",
                streetAddress: "練馬区東大泉1-34-8",
                postalCode: "178-0063",
                addressCountry: "JP",
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}>
        <Header />
        <StickyNaviMenu />
        <div className="flex max-w-7xl mx-auto w-full min-h-[70vh]">
          {/* サイドバナー（PCのみ） */}
          <aside className="hidden md:block w-72 flex-shrink-0">
            <SideBanners />
          </aside>
          {/* メインコンテンツ */}
          <main className="flex-1">
            {children}
          </main>
        </div>
        <FooterSection />
      </body>
    </html>
  );
}
