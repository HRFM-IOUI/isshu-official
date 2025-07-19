"use client";
import { useState } from "react";

const initialState = {
  name: "",
  furigana: "",
  email: "",
  address: "",
  tel: "",
  amount: "",
  message: "",
  agree: false,
};
const AMOUNT_CHOICES = ["1000", "3000", "5000", "10000", "50000", ""];

export default function DonationForm() {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  // 必須バリデーション
  const requiredFields: (keyof typeof form)[] = [
    "name", "furigana", "email", "address", "amount", "agree"
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm({ ...form, [name]: (e.target as HTMLInputElement).checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleAmountClick = (value: string) => {
    setForm((f) => ({ ...f, amount: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    for (const key of requiredFields) {
      if (!form[key]) {
        setError("※赤い項目は必須です。すべてご入力・ご同意ください。");
        return;
      }
    }
    setError(null);
    // ここで送信ロジック
    setSent(true);
  };

  if (sent) {
    return (
      <div className="p-8 bg-green-50 text-green-700 rounded-2xl text-center shadow-lg animate-fade-in">
        ご寄附ありがとうございました。<br />
        内容を確認し、事務所よりご連絡差し上げます。
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7 bg-white/80 p-8 rounded-2xl shadow-2xl max-w-xl mx-auto backdrop-blur-sm">
      <h2 className="text-xl md:text-2xl font-extrabold text-[#ed4146] mb-3 text-center tracking-tight">
        ご寄附お申込みフォーム
      </h2>

      {/* 氏名 */}
      <div className="relative group">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="peer w-full px-4 py-3 border rounded-xl outline-none bg-white/80 shadow-inner focus:border-[#ed4146] focus:ring-2 focus:ring-[#ed4146]/30 transition"
          placeholder=" "
          aria-label="ご氏名（本人）"
          required
        />
        <label className="absolute left-4 top-3 text-gray-500 text-sm peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#ed4146] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm pointer-events-none bg-white px-1">
          ご氏名（本人）<span className="text-red-600">*</span>
        </label>
      </div>
      {/* フリガナ */}
      <div className="relative group">
        <input
          name="furigana"
          value={form.furigana}
          onChange={handleChange}
          className="peer w-full px-4 py-3 border rounded-xl outline-none bg-white/80 shadow-inner focus:border-[#ed4146] focus:ring-2 focus:ring-[#ed4146]/30 transition"
          placeholder=" "
          aria-label="フリガナ"
          required
        />
        <label className="absolute left-4 top-3 text-gray-500 text-sm peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#ed4146] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm pointer-events-none bg-white px-1">
          フリガナ<span className="text-red-600">*</span>
        </label>
      </div>
      {/* メール */}
      <div className="relative group">
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="peer w-full px-4 py-3 border rounded-xl outline-none bg-white/80 shadow-inner focus:border-[#ed4146] focus:ring-2 focus:ring-[#ed4146]/30 transition"
          placeholder=" "
          aria-label="メールアドレス"
          required
        />
        <label className="absolute left-4 top-3 text-gray-500 text-sm peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#ed4146] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm pointer-events-none bg-white px-1">
          メールアドレス<span className="text-red-600">*</span>
        </label>
      </div>
      {/* 住所 */}
      <div className="relative group">
        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          className="peer w-full px-4 py-3 border rounded-xl outline-none bg-white/80 shadow-inner focus:border-[#ed4146] focus:ring-2 focus:ring-[#ed4146]/30 transition"
          placeholder=" "
          aria-label="ご住所"
          required
        />
        <label className="absolute left-4 top-3 text-gray-500 text-sm peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#ed4146] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm pointer-events-none bg-white px-1">
          ご住所<span className="text-red-600">*</span>
        </label>
      </div>
      {/* 電話番号 */}
      <div className="relative group">
        <input
          name="tel"
          value={form.tel}
          onChange={handleChange}
          className="peer w-full px-4 py-3 border rounded-xl outline-none bg-white/80 shadow-inner focus:border-[#ed4146] focus:ring-2 focus:ring-[#ed4146]/30 transition"
          placeholder=" "
          aria-label="電話番号"
        />
        <label className="absolute left-4 top-3 text-gray-500 text-sm peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#ed4146] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm pointer-events-none bg-white px-1">
          電話番号
        </label>
      </div>

      {/* 寄附金額：プリセット＋自由入力 */}
      <div>
        <div className="mb-2 font-semibold text-red-600">ご寄附金額（円）<span>*</span></div>
        <div className="flex gap-2 flex-wrap mb-2">
          {AMOUNT_CHOICES.map((a) => (
            <button
              type="button"
              key={a}
              className={`px-4 py-2 rounded-xl border transition-all font-bold shadow-sm text-base
                ${a === form.amount
                  ? "bg-[#ed4146] text-white border-[#ed4146] scale-105"
                  : "bg-white text-[#ed4146] border-[#ed4146] hover:bg-[#ed4146]/10"}
              `}
              onClick={() => handleAmountClick(a)}
              aria-pressed={a === form.amount}
            >
              {a ? `${Number(a).toLocaleString()}円` : "その他"}
            </button>
          ))}
        </div>
        {form.amount === "" && (
          <input
            name="amount"
            value={form.amount}
            onChange={handleChange}
            type="number"
            min={1000}
            step={100}
            className="w-full border p-2 rounded-xl mt-1 outline-none focus:border-[#ed4146] focus:ring-2 focus:ring-[#ed4146]/30 transition"
            placeholder="金額を入力（1000円以上）"
            aria-label="寄附金額"
            required
          />
        )}
      </div>
      {/* メッセージ */}
      <div className="relative group">
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="peer w-full px-4 py-3 border rounded-xl outline-none bg-white/80 shadow-inner focus:border-[#ed4146] focus:ring-2 focus:ring-[#ed4146]/30 transition"
          rows={4}
          placeholder=" "
          aria-label="応援メッセージなど"
        />
        <label className="absolute left-4 top-3 text-gray-500 text-sm peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#ed4146] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm pointer-events-none bg-white px-1">
          応援メッセージなど（任意）
        </label>
      </div>

      {/* 注意書き */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-900 p-4 text-xs rounded shadow-inner">
        <ul className="list-disc pl-5 space-y-1">
          <li>※ ご本人名義以外の寄附、法人・団体・外国人の方からの寄附は受け付けできません。</li>
          <li>※ 年間20万円を超える場合は選管への報告が義務づけられています。</li>
          <li>※ ご記入いただいた情報は政治資金規正法に基づき管理いたします。</li>
        </ul>
      </div>
      {/* 同意 */}
      <div>
        <label className="inline-flex items-center cursor-pointer">
          <input
            name="agree"
            type="checkbox"
            checked={form.agree}
            onChange={handleChange}
            className="mr-2 accent-[#ed4146] w-5 h-5"
            aria-required="true"
          />
          <span className="text-red-600 font-semibold">上記内容を理解し同意しました *</span>
        </label>
      </div>
      {error && <div className="text-red-600">{error}</div>}
      <button
        type="submit"
        className="w-full py-3 mt-2 bg-[#ed4146] text-white rounded-2xl font-extrabold text-lg shadow-lg hover:bg-[#c9151d] hover:shadow-xl active:scale-98 transition-all"
      >
        ご寄附を申し込む
      </button>
    </form>
  );
}
