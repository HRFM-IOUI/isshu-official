"use client";
import { motion } from "framer-motion";
import { FaHandsHelping, FaUsers } from "react-icons/fa";

export default function CommunityPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-14">
      {/* 見出し */}
      <h1 className="text-3xl md:text-4xl font-extrabold mb-10 flex items-center gap-3">
        <span className="border-l-8 border-blue-500 pl-4 bg-gradient-to-r from-blue-50/60 to-white py-1 rounded-r-lg shadow-sm">
          地元・練馬のみなさまとともに
        </span>
        <FaUsers className="text-blue-400 ml-1" size={32} />
      </h1>
      {/* メイン写真（曲線マスク＋グラデ） */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative rounded-3xl overflow-hidden shadow-2xl mb-9"
      >
        <img
          src="/community_main.jpg"
          alt="練馬の皆様と"
          className="w-full h-64 md:h-80 object-cover object-center scale-105"
        />
        {/* 曲線下グラデ */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(0deg, #eef7ff88 0%, #ffffff00 60%)",
        }}/>
      </motion.div>
      {/* ふれあいコーナー */}
      <motion.div
        initial={{ opacity: 0, x: 36 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="bg-white/90 rounded-xl shadow-lg p-7 mb-10 border-l-4 border-blue-300/60 relative"
      >
        <div className="absolute -left-6 top-6">
          <FaHandsHelping className="text-blue-300" size={36} />
        </div>
        <h2 className="font-bold text-lg mb-3 text-blue-600 pl-6">ふれあいコーナー</h2>
        <p className="text-base leading-relaxed text-neutral-800 pl-6">
          練馬区で生まれ育ち、地元「旭町中地区・東と西町会」の皆様や<br />
          たくさんのご近所の方々に支えられてきました。<br />
          写真は、幼少期からあたたかく見守ってくださった同町会にお住まいの皆様との交流会の様子です。<br />
          今後も皆様との絆を大切に活動を続けてまいります。
        </p>
      </motion.div>
      {/* サブ写真グリッド */}
      <div className="flex flex-col md:flex-row gap-5 mt-4">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex-1 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform bg-gradient-to-br from-blue-100/30 to-white"
        >
          <img
            src="/community_sub1.jpg"
            alt="地域の交流"
            className="w-full h-52 object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          viewport={{ once: true }}
          className="flex-1 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform bg-gradient-to-bl from-blue-50/40 to-white"
        >
          <img
            src="/community_sub2.jpg"
            alt="地域の方々"
            className="w-full h-52 object-cover"
          />
        </motion.div>
      </div>
      <div className="mt-8 text-right text-sm text-neutral-400">
        ※写真掲載は許諾済みです。
      </div>
    </section>
  );
}
