"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DrawerMenu from "@/components/DrawerMenu";

const NAV_LIST = [
  { label: "ホーム", key: "home", href: "/" },
  { label: "プロフィール", key: "profile", href: "/profile" },
  { label: "10の約束", key: "promise", href: "/promise" },
  { label: "練馬の皆様へ", key: "community", href: "/community" },
  { label: "国会活動", key: "government", href: "/government" },
  { label: "一秀から", key: "request", href: "/request" },
  { label: "お問い合わせ", key: "inquiry", href: "/inquiry" },
];

export default function StickyNaviMenu() {
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const router = useRouter();

  // Drawerを閉じる
  const handleNavLeave = () => setActiveNav(null);

  // モバイル対応: クリック時はページ遷移のみ、ホバー時だけDrawer開く
  // スマホはhover効かないのでDrawerは開かず、PCのみDrawer表示
  const isTouchDevice = typeof window !== "undefined" && ("ontouchstart" in window);

  return (
    <div className="sticky top-0 z-30 bg-white shadow">
      <nav
        className="flex justify-center gap-6 py-2 font-bold text-base"
        onMouseLeave={handleNavLeave}
      >
        {NAV_LIST.map((nav) => (
          <button
            key={nav.key}
            className={`relative px-4 py-2 transition-all ${activeNav === nav.key ? "text-[#C8102E]" : ""}`}
            onMouseEnter={() => {
              if (!isTouchDevice) setActiveNav(nav.key);
            }}
            onFocus={() => setActiveNav(nav.key)}
            onClick={() => {
              setActiveNav(null); // ページ遷移時はDrawer閉じる
              router.push(nav.href);
            }}
          >
            {nav.label}
          </button>
        ))}
      </nav>
      {/* PCだけDrawer表示。モバイルはnavのみ */}
      {!isTouchDevice && (
        <DrawerMenu navKey={activeNav} open={!!activeNav} />
      )}
    </div>
  );
}

