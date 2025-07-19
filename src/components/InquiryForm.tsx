"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const initialState = {
  name: "",
  furigana: "",
  email: "",
  address: "",
  tel: "",
  age: "",
  job: "",
  gender: "",
  message: "",
};

const ageOptions = ["", "10代", "20代", "30代", "40代", "50代", "60代以上"];
const jobOptions = ["", "会社員", "公務員", "自営業", "学生", "無職", "その他"];
const genderOptions = ["", "男性", "女性", "その他"];

export default function InquiryForm() {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  // 必須バリデーション
  const requiredFields: (keyof typeof form)[] = [
    "name", "furigana", "email", "gender", "message"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // バリデーション
    for (const key of requiredFields) {
      if (!form[key]) {
        setError("※赤い項目は必須です。すべて入力してください。");
        return;
      }
    }
    setError(null);
    // ここで送信ロジック（API連携やメール送信）
    setSent(true);
  };

  return (
    <section className="max-w-xl mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white/95 rounded-2xl shadow-2xl border border-blue-100 p-8"
      >
        <h1 className="text-2xl md:text-3xl font-extrabold mb-8 text-[#C8102E] tracking-wide text-center">
          お問い合わせフォーム
        </h1>
        <AnimatePresence>
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              className="flex flex-col items-center justify-center min-h-[250px] text-center"
            >
              <FaCheckCircle className="text-green-400 text-5xl mb-4" />
              <div className="text-lg font-semibold text-green-700 mb-1">
                お問い合わせ内容を送信しました。
              </div>
              <div className="text-sm text-neutral-600">
                ご連絡ありがとうございました。<br />
                内容を確認のうえ、担当よりご返信いたします。
              </div>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <label className="block font-semibold text-red-600 mb-1">お名前 ※</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-[#C8102E]/30 focus:border-[#C8102E] p-3 rounded bg-white/80 transition"
                  placeholder="例）佐藤 一郎"
                  autoComplete="name"
                />
              </div>
              <div>
                <label className="block font-semibold text-red-600 mb-1">フリガナ ※</label>
                <input
                  name="furigana"
                  value={form.furigana}
                  onChange={handleChange}
                  className="w-full border border-[#C8102E]/30 focus:border-[#C8102E] p-3 rounded bg-white/80 transition"
                  placeholder="例）サトウ イチロウ"
                />
              </div>
              <div>
                <label className="block font-semibold text-red-600 mb-1">メールアドレス ※</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-[#C8102E]/30 focus:border-[#C8102E] p-3 rounded bg-white/80 transition"
                  placeholder="例）info@example.com"
                  autoComplete="email"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">ご住所</label>
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full border border-neutral-300 focus:border-blue-400 p-3 rounded bg-white/80 transition"
                  placeholder="例）東京都練馬区..."
                  autoComplete="street-address"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">電話番号</label>
                <input
                  name="tel"
                  value={form.tel}
                  onChange={handleChange}
                  className="w-full border border-neutral-300 focus:border-blue-400 p-3 rounded bg-white/80 transition"
                  placeholder="例）03-1234-5678"
                  autoComplete="tel"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">年代</label>
                <select
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  className="w-full border border-neutral-300 focus:border-blue-400 p-3 rounded bg-white/80 transition"
                >
                  {ageOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt || "お選び下さい"}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-1">ご職業</label>
                <select
                  name="job"
                  value={form.job}
                  onChange={handleChange}
                  className="w-full border border-neutral-300 focus:border-blue-400 p-3 rounded bg-white/80 transition"
                >
                  {jobOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt || "お選び下さい"}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-semibold text-red-600 mb-1">性別 ※</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="w-full border border-[#C8102E]/30 focus:border-[#C8102E] p-3 rounded bg-white/80 transition"
                >
                  {genderOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt || "お選び下さい"}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-semibold text-red-600 mb-1">ご意見・お問い合わせ内容 ※</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-[#C8102E]/30 focus:border-[#C8102E] p-3 rounded bg-white/80 transition"
                  rows={5}
                  placeholder="出来るだけ具体的にお書き下さい。"
                />
              </div>
              {error && <motion.div className="text-red-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{error}</motion.div>}
              <button
                type="submit"
                className="w-full py-3 mt-2 bg-[#C8102E] text-white rounded font-bold text-lg shadow hover:bg-red-700 hover:scale-105 transition duration-150"
              >
                入力内容を確認する
              </button>
              <p className="text-xs text-neutral-500 mt-2">
                ※マークがついている項目は入力必須項目です。必ずご入力下さい。
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
