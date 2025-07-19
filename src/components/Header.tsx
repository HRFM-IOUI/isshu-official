"use client";
import Link from "next/link";
import { FiMail, FiGift } from "react-icons/fi";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between h-14 px-4 md:px-8 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-neutral-200">
      {/* 左：空（潔さ） */}
      <div className="w-10"></div>
      {/* 中央：空 */}
      <div className="flex-1"></div>
      {/* 右：寄附・メールボタン */}
      <div className="flex items-center gap-4">
        <Link
          href="/donation" // ← ルートに合わせる
          aria-label="寄附ページへ"
          className="flex items-center gap-2 bg-gradient-to-r from-[#ed4146] to-[#d93237] text-white font-semibold rounded-full px-4 py-2 shadow hover:scale-105 transition-all duration-200"
        >
          <FiGift className="text-lg" />
          寄附する
        </Link>
        <Link
          href="/inquiry" // ← ルートに合わせる
          aria-label="お問い合わせページへ"
          className="flex items-center gap-2 border border-[#2273d9] text-[#2273d9] font-semibold rounded-full px-4 py-2 hover:bg-[#2273d9]/10 hover:scale-105 transition-all duration-200"
        >
          <FiMail className="text-lg" />
          メール
        </Link>
      </div>
    </header>
  );
}
