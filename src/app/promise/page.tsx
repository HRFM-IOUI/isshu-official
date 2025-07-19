"use client";
import { motion } from "framer-motion";

const PROMISES = [
  "増税路線を止め、国民所得拡大を最優先！",
  "中国、ロシア、北朝鮮の核の脅威に対し毅然とした外交力と安全保障の強化！",
  "円安のメリットとデメリットを踏まえた金融政策へ！",
  "企業の稼ぐ力を強化し、物価上昇率を上回る賃金上昇を実現！",
  "パート・アルバイト・派遣社員の最低賃金を1500円にし、年収の壁を引き上げ！",
  "電気代の補助金を継続させ、食料品・子育て・教育・介護等の消費税減税を実施！",
  "返済不要の奨学金の対象拡大・しつけや思いやりの心を育む道徳教育の深化！",
  "現場や仕事の実情にマッチした残業規制の見直しで人手不足の解消・宅配料金等の値上げ阻止！",
  "定年制や役職定年を廃止し、世代間の同一労働同一賃金を実施！アクティブ世代を増やす！",
  "高齢者等の負担・年金のマクロ経済スライドを廃止へ！",
];

export default function VisionPage() {
  return (
    <section className="relative max-w-3xl mx-auto px-4 py-14">
      {/* 背景に波グラデ */}
      <div
        aria-hidden
        className="absolute -z-10 left-0 right-0 top-0 h-[420px] opacity-80 blur-lg"
        style={{
          background:
            "linear-gradient(120deg, #50a7f9 0%, #b7e0ff 80%, #ffffff 100%)",
        }}
      />
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-neutral-800 tracking-tight flex items-center gap-4">
        <span className="inline-block border-l-8 border-[#C8102E] pl-5 pr-2 py-1 bg-gradient-to-r from-[#C8102E]/10 to-transparent rounded-r-md shadow-sm">
          すがわら一秀の10の約束
        </span>
      </h1>
      <div className="space-y-7">
        {PROMISES.map((promise, i) => (
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.66, delay: i * 0.06 }}
            key={i}
            className="flex items-start gap-5 bg-white/95 rounded-2xl shadow-xl p-7 border-l-8 border-blue-400 hover:scale-[1.025] hover:shadow-2xl transition-all duration-300"
          >
            <span
              className="w-12 h-12 min-w-[3rem] flex items-center justify-center rounded-full bg-gradient-to-br from-[#C8102E] via-[#369bfd] to-[#5fd2ff]
              text-white text-2xl md:text-3xl font-extrabold shadow-lg ring-2 ring-blue-100 select-none"
            >
              {i + 1}
            </span>
            <span className="text-lg md:text-xl leading-relaxed font-medium text-neutral-800">
              {promise}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-right text-sm text-neutral-400">
        ※内容は2025年現在の重点政策です。
      </div>
      {/* 装飾波（SVGでもOK。今回はシンプルCSSで） */}
      <div
        aria-hidden
        className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-t from-blue-100/50 to-transparent"
      />
    </section>
  );
}
