"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaYoutube,
  FaInstagram,
  FaXTwitter,
  FaLandmark,
  FaBaseballBatBall,
  FaDrum,
  FaPeopleGroup,
} from "react-icons/fa6";

// サムネ・説明は /public 配下に用意
const BANNERS = [
  {
    label: "すがわら一秀 YouTube",
    href: "https://www.youtube.com/",
    icon: <FaYoutube className="text-[#FF0000] text-2xl" />,
    type: "sns",
    thumb: "/youtube-thumb.jpg",
    description: "すがわら一秀公式YouTubeチャンネル",
  },
  {
    label: "すがわら一秀 Instagram",
    href: "https://www.instagram.com/",
    icon: <FaInstagram className="text-[#E4405F] text-2xl" />,
    type: "sns",
    thumb: "/instagram-thumb.jpg",
    description: "日常や活動を発信するInstagram",
  },
  {
    label: "Isshu Sugawara X",
    href: "https://x.com/",
    icon: <FaXTwitter className="text-neutral-700 text-2xl" />,
    type: "sns",
    thumb: "/x-thumb.jpg",
    description: "リアルタイム情報や発信をチェック",
  },
  {
    label: "TOKYO自民党",
    href: "https://www.tokyo-jimin.jp/",
    icon: <FaLandmark className="text-green-700 text-2xl" />,
    type: "party",
    thumb: "/jimin-thumb.jpg",
    description: "東京都自民党公式サイト",
  },
  {
    label: "練馬区",
    href: "https://www.city.nerima.tokyo.jp/",
    icon: <FaPeopleGroup className="text-purple-600 text-2xl" />,
    type: "local",
    thumb: "/nerima-thumb.jpg",
    description: "練馬区公式サイト。区政・地域情報。",
  },
  {
    label: "せんば太鼓",
    href: "https://senbadaiko.example.com/",
    icon: <FaDrum className="text-neutral-700 text-2xl" />,
    type: "activity",
    thumb: "/senbadaiko-thumb.jpg",
    description: "伝統の和太鼓集団・せんば太鼓",
  },
  {
    label: "練馬区軟式野球連盟",
    href: "https://nerima-baseball.example.com/",
    icon: <FaBaseballBatBall className="text-blue-400 text-2xl" />,
    type: "local",
    thumb: "/baseball-thumb.jpg",
    description: "練馬区の野球大会・地域交流を主催",
  },
];

export default function SideBanners() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <aside className="w-full max-w-xs mx-auto mt-8 hidden md:block relative">
      <div className="grid grid-cols-1 gap-4">
        {BANNERS.map((b, idx) => (
          <div
            key={b.label}
            className="relative"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <a
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 
                bg-white shadow-lg rounded-xl px-4 py-3 
                hover:bg-blue-50 transition border
                ${
                  b.type === "party"
                    ? "border-green-300"
                    : b.type === "local"
                    ? "border-purple-200"
                    : b.type === "activity"
                    ? "border-yellow-200"
                    : "border-blue-100"
                }
              `}
            >
              {b.icon}
              <span className="font-bold text-neutral-700">{b.label}</span>
            </a>
            {/* ホバープレビュー（右側にふわっと表示） */}
            <AnimatePresence>
              {hovered === idx && b.thumb && (
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 8 }}
                  exit={{ opacity: 0, x: 24 }}
                  transition={{ type: "spring", stiffness: 240, damping: 22 }}
                  className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-56 bg-white shadow-2xl rounded-xl border p-3 flex flex-col items-center z-50"
                  style={{ pointerEvents: "none" }}
                >
                  <img
                    src={b.thumb}
                    alt={b.label + "プレビュー"}
                    className="w-full h-24 object-cover rounded-md mb-2"
                  />
                  <div className="text-xs text-neutral-700 text-center">{b.description}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </aside>
  );
}
