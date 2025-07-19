"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const MENUS: Record<string, { title: string; items: { label: string; href: string }[] }[]> = {
  pickup: [
    {
      title: "ピックアップ",
      items: [
        { label: "すべてのお知らせ", href: "#" },
        { label: "ラグビー関連", href: "#" },
      ],
    },
  ],
  vision: [
    {
      title: "政策・ビジョン",
      items: [
        { label: "10の約束", href: "#" },
        { label: "教育政策", href: "#" },
      ],
    },
  ],
  // 他も同様に追加OK
};

export default function DrawerMenu({
  navKey,
  open,
}: {
  navKey: string | null;
  open: boolean;
}) {
  const menu = MENUS[navKey || ""] || [];

  return (
    <AnimatePresence>
      {open && navKey && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 30, scale: 0.97, filter: "blur(8px)" }}
          transition={{
            type: "spring",
            stiffness: 240,
            damping: 30,
            duration: 0.36,
          }}
          className="absolute left-0 w-full z-50 bg-white/10 backdrop-blur-2xl border-t border-neutral-200 shadow-[0_12px_60px_0_rgba(30,80,180,0.22)] rounded-b-2xl transition-all duration-300"
          style={{ top: 56 }}
        >
          <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {menu.map((col) => (
              <div key={col.title}>
                <div className="font-semibold text-base md:text-lg text-neutral-700 mb-4 tracking-tight">
                  {col.title}
                </div>
                <ul>
                  {col.items.map((item) => (
                    <li key={item.label} className="mb-2">
                      <a
                        href={item.href}
                        className="block text-[16px] md:text-base text-neutral-800 px-2 py-1 rounded transition-all duration-150 hover:bg-[#eaf3fa] hover:text-[#2166b1] font-medium"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
