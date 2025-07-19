"use client";
import { motion } from "framer-motion";

export default function ProfilePage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-neutral-800 tracking-tight flex items-center gap-3">
        <span className="inline-block border-l-8 border-[#C8102E] pl-5 pr-2 py-1 bg-gradient-to-r from-[#C8102E]/10 to-transparent rounded-r-md shadow-sm">
          プロフィール
        </span>
        <span className="text-xl text-blue-400 font-semibold tracking-wide">Profile</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* 画像（微グラデ・シャドウ） */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <div className="relative w-full aspect-[3/4] rounded-xl shadow-2xl overflow-hidden bg-gradient-to-br from-[#1976d2]/60 via-[#43a3ff]/10 to-[#000]/20">
            <img
              src="/main_00_pc.png"
              alt="菅原一秀 プロフィール写真"
              className="w-full h-full object-cover rounded-xl shadow-xl mix-blend-luminosity hover:scale-105 transition-transform duration-500"
              draggable={false}
            />
            {/* 薄いカラーレイヤー */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#50a7f988] via-transparent to-transparent pointer-events-none rounded-xl" />
          </div>
        </motion.div>
        {/* プロフィール説明（カード調） */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="bg-white/90 shadow-xl rounded-xl p-6 md:p-8 border border-blue-100"
        >
          <h2 className="text-2xl font-bold text-neutral-800 mb-4">菅原一秀（すがわら いっしゅう）</h2>
          <div className="mb-3 text-blue-600 font-medium">元経済産業大臣／練馬区出身</div>
          <ul className="space-y-1 text-base text-neutral-800">
            <li><span className="font-semibold text-neutral-500">生年月日：</span>1962年1月4日</li>
            <li><span className="font-semibold text-neutral-500">出身地：</span>東京都練馬区</li>
            <li><span className="font-semibold text-neutral-500">学歴：</span>早稲田大学社会科学部卒業</li>
            <li><span className="font-semibold text-neutral-500">経歴：</span>自民党所属 衆議院議員（5期）</li>
            <li><span className="font-semibold text-neutral-500">趣味：</span>ラグビー、ジョギング</li>
            <li><span className="font-semibold text-neutral-500">座右の銘：</span>「Never Stop. 自分のTRYを。」</li>
          </ul>
        </motion.div>
      </div>
      {/* 経歴エリア（区切り・タイムライン調） */}
      <div className="mt-14">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 border-l-4 border-blue-400 pl-3 text-neutral-800">主な経歴</h2>
        <div className="pl-3 border-l-2 border-blue-200 ml-1 space-y-3">
          <div className="relative pl-5">
            <span className="absolute left-0 top-1 w-3 h-3 rounded-full bg-blue-400 border-2 border-white" />
            財務副大臣
          </div>
          <div className="relative pl-5">
            <span className="absolute left-0 top-1 w-3 h-3 rounded-full bg-blue-400 border-2 border-white" />
            自民党 広報本部 ネットメディア局長
          </div>
          <div className="relative pl-5">
            <span className="absolute left-0 top-1 w-3 h-3 rounded-full bg-blue-400 border-2 border-white" />
            衆議院 決算行政監視委員会理事
          </div>
          <div className="relative pl-5">
            <span className="absolute left-0 top-1 w-3 h-3 rounded-full bg-blue-400 border-2 border-white" />
            経済産業大臣（第28代）
          </div>
        </div>
      </div>
    </section>
  );
}
