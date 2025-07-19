// src/app/donation/page.tsx
import DonationForm from "@/components/DonationForm";

export default function DonationPage() {
  return (
    <section className="max-w-2xl mx-auto py-14 px-4">
      <h1 className="text-2xl font-bold mb-6 text-[#ed4146]">ご寄附のお願い</h1>
      <p className="mb-6">
        菅原一秀の活動は皆様からのご寄附・ご支援で成り立っています。<br />
        下記フォームよりご本人名義でのご寄附をお願いいたします。
      </p>
      <DonationForm />
    </section>
  );
}
