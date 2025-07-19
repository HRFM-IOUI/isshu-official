import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="absolute inset-0">
      {/* メイン画像 */}
      <Image
        src="/main_00_pc.png"
        alt="菅原一秀ヒーローバナー"
        fill
        className="object-cover opacity-85"
        priority
      />
      {/* 左から黒グラデでテキスト映え（顔が中央ならやや右寄せ） */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-blue-900/10" />
      {/* 下から青〜白グラデで“リッチな光彩”感 */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-200/15 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
