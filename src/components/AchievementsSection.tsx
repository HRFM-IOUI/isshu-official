"use client";

const achievements = [
  { title: "議員年金廃止法", desc: "国会議員の年金廃止を実現" },
  { title: "社会保険庁解体法", desc: "年金の信頼性を回復" },
  { title: "北朝鮮特定船舶入港禁止法", desc: "安全保障強化" },
  { title: "マネーロンダリング対策改正", desc: "犯罪防止に寄与" },
  { title: "振り込め詐欺撲滅法", desc: "高齢者を守る法整備" },
  { title: "アスベスト被害者救済法", desc: "健康被害の補償" },
  { title: "偽造カード対策法", desc: "預金者保護の強化" },
  { title: "B型肝炎給付金支給法", desc: "感染被害者への救済" },
  { title: "タクシー適正化法", desc: "安全な交通社会へ" },
  { title: "都市農業振興法", desc: "地域農業の活性化" },
];

export default function AchievementsSection() {
  return (
    <section className="bg-neutral-100 py-14 px-4">
      <h2 className="text-2xl md:text-4xl font-extrabold text-[#C8102E] text-center mb-8">
        6期18年で実現した、<br className="md:hidden" />主な法案・実績
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {achievements.map((a, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center border border-neutral-200 hover:scale-105 transition">
            <div className="text-2xl font-bold mb-2 text-black text-center">{a.title}</div>
            <div className="text-neutral-600 text-sm text-center">{a.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
