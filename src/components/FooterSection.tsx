"use client";
import Link from "next/link";
import { FiMapPin, FiPhone, FiPrinter } from "react-icons/fi";
import { motion } from "framer-motion";

// フッター本体
export default function FooterSection() {
  return (
    <footer
      className="w-full pt-10 pb-5 mt-16 shadow-lg text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(120deg, #1a1c20 0%, #212835 70%, #191e23 100%)",
        backgroundSize: "200% 200%",
        animation: "footerGradientFlow 20s ease-in-out infinite",
      }}
    >
      {/* ホワイトグラデ・フロー */}
      <motion.div
        className="absolute left-[-30%] top-0 h-full w-1/2 pointer-events-none"
        style={{
          background: "linear-gradient(100deg, transparent, rgba(255,255,255,0.12) 60%, transparent)",
        }}
        animate={{ x: ["0%", "100%"] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 relative z-10">
        {/* 事務所情報 */}
        <div className="flex flex-col items-center md:items-start text-xs md:text-sm font-light text-neutral-300">
          <div className="flex items-center gap-2 mb-1">
            <FiMapPin className="text-[#7dcfff]" />
            <span>〒178-0063 練馬区東大泉1-34-8</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:03-5935-7777" className="flex items-center gap-1 hover:text-[#90d8ff] underline-offset-4">
              <FiPhone className="text-[#7dcfff]" />
              03-5935-7777
            </a>
            <span className="flex items-center gap-1">
              <FiPrinter className="text-[#7dcfff]" />
              03-5935-7778
            </span>
          </div>
        </div>
        {/* リンク群 */}
        <div className="flex flex-wrap gap-4 text-xs md:text-sm font-medium">
          <Link href="/privacypolicy" className="hover:text-[#ed4146] hover:underline underline-offset-2 transition-all">プライバシーポリシー</Link>
          <span>・</span>
          <Link href="/link" className="hover:text-[#ed4146] hover:underline underline-offset-2 transition-all">リンク</Link>
        </div>
      </div>
      {/* クレジット */}
      <div className="text-center text-[11px] mt-8 text-neutral-400 tracking-wide select-none relative z-10">
        Copyright © {new Date().getFullYear()} isshu.online All Rights Reserved.
      </div>
    </footer>
  );
}
