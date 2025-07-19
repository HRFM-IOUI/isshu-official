"use client";
import React from "react";
import { motion } from "framer-motion";

const CARDS = [
  {
    icon: "👥",
    color: "#369bfd",
    title: "ミニ集会を開きませんか？",
    body: "10人〜100人規模の集会へ気軽にお声がけください。小規模でも大歓迎！地域イベントやご近所のお集まりにも伺います。",
  },
  {
    icon: "🪧",
    color: "#C8102E",
    title: "ポスターご協力のお願い",
    body: "ご自宅や駐車場など、掲示場所をご提供いただける方を募集中です。掲示板はこちらでご用意します。お問い合わせ：練馬事務所 03-3992-3333",
  },
  {
    icon: "🤝",
    color: "#0eac5c",
    title: "ご紹介ください",
    body: "ご家族・ご友人・ご近所などへ後援会へのご紹介をお願いしています。お名前とご住所をお知らせください。イベント案内をお送りします。",
  },
  {
    icon: "💡",
    color: "#fbbf24",
    title: "ご支援のお願い",
    body: "任意のご寄付・ご支援も受付中です。領収書を発行し、控除申請も可能です。ご協力よろしくお願いいたします。",
  },
];

export default function RequestPage() {
  return (
    <section className="max-w-4xl mx-auto py-14 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-neutral-800 tracking-tight">
        <span className="inline-block border-l-8 border-[#C8102E] pl-6 pr-2 py-1 bg-gradient-to-r from-[#C8102E]/10 to-transparent rounded-r-md shadow-sm">
          一秀からのご案内・お願い
        </span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {CARDS.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.09 }}
            className="relative bg-white/90 rounded-2xl shadow-xl border-l-8"
            style={{
              borderColor: card.color,
            }}
          >
            {/* アイコンのカラフル円（波グラデも可） */}
            <div
              className="absolute -top-7 left-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white/80 select-none"
              style={{
                background: `radial-gradient(circle at 70% 30%, ${card.color} 0%, #ffffff 80%)`,
                fontSize: 32,
              }}
            >
              {card.icon}
            </div>
            <div className="pt-10 pb-5 px-6 flex flex-col items-start">
              <h3 className="font-bold text-lg mb-2 text-neutral-800">{card.title}</h3>
              <p className="text-base text-neutral-700">{card.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
