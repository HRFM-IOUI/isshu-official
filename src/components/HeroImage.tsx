import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="absolute inset-0">
      {/* メイン画像 */}
      <Image
        src="/main_00_pc.png"
        alt="菅原一秀ヒーローバナー"
        fill
        className="object-cover object-left md:object-center opacity-85 transition-all duration-500"
        priority
      />
      {/* 左から黒グラデでテキスト映え */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-blue-900/10" />
      {/* 下から青〜白グラデ */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-200/15 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
