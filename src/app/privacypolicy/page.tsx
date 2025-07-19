"use client";

export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-[#005bac] border-l-8 border-[#369bfd] pl-4 bg-gradient-to-r from-blue-50 to-white rounded-r-md shadow-sm">
        個人情報保護方針
      </h1>
      <p className="mb-6 text-lg text-neutral-800">
        すがわら一秀オフィシャルサイトでは、お客様の個人情報について細心の注意を払って管理をしております。
        すがわら一秀事務所の「プライバシーに関する考え方」を以下に記載いたします。
      </p>

      <h2 className="font-bold text-lg mt-10 mb-3 text-[#005bac] border-l-4 border-blue-300 pl-2">個人情報の収集･開示について</h2>
      <p className="mb-5">
        すがわら一秀オフィシャルサイトで個人情報のご提供をお願いする際は、その目的・利用内容を明示いたします。
        お客様ご自身の個人情報を記載したお問い合わせ等を弊社宛にEメールにて送付された場合は、すがわら一秀事務所内にて、
        お問い合わせ等の内容の確認のために必要な部門、担当者に当該メールを転送することがあります。
        この場合においても個人情報は、すがわら一秀事務所の人員により管理され、ご承諾のない限り、あるいは法律等により要求された場合を除き、
        お客様の個人情報の開示は行いません。
      </p>

      <h2 className="font-bold text-lg mt-10 mb-3 text-[#005bac] border-l-4 border-blue-300 pl-2">個人情報の管理について</h2>
      <p className="mb-5">
        すがわら一秀オフィシャルサイトでは、お客様の個人情報を収集した際には、プライバシーを尊重し、個人情報を保護するために厳重に管理いたします。
        すがわら一秀オフィシャルサイトでは、お客様の個人情報の紛失、破壊、改ざんおよび漏洩に関し予防措置を講ずるとともに、
        万一の発生時には速やかに是正措置を実施いたします。
      </p>

      <h2 className="font-bold text-lg mt-10 mb-3 text-[#005bac] border-l-4 border-blue-300 pl-2">個人情報の使用について</h2>
      <p className="mb-2">
        すがわら一秀オフィシャルサイトでは、原則として下記以外の目的でお客様の個人情報は使用いたしません。
        下記以外の目的で使用する際は、このページまたは本ウェブサイト上でお知らせいたします。
        尚、使用にあたっては、個人情報を統計的に処理し、匿名性を確保したうえで使用させていただきます。
      </p>
      <ul className="list-disc pl-8 mt-2 text-sm mb-5">
        <li>すがわら一秀オフィシャルサイトサービス向上のために、事務所内での参考資料として使用。</li>
        <li>すがわら一秀オフィシャルサイトのサービス向上のために、事務所のビジネスパートナーとの参考資料として使用。</li>
      </ul>

      <h2 className="font-bold text-lg mt-10 mb-3 text-[#005bac] border-l-4 border-blue-300 pl-2">E-mailについて</h2>
      <p className="mb-5">
        個人情報としてご提供いただいたメールアドレスに対して、お客様に有益と思われる情報を、すがわら一秀事務所からメールを送信させていただくことがあります。
        尚、すがわら一秀からのメールが不要な場合はメール送信を中止することが可能です。<br />
        尚、お客様のプライバシーに対する考え方は弊社のサービス内容の変更に基づいて改訂する場合がございますのでご利用時に有効な「プライバシーに関する考え方」に準じますことをご了承ください。
        併せて変更を確認するため定期的にプライバシーポリシーをチェックされますことをお勧めいたします。
      </p>

      <div className="mt-10 text-right text-sm text-neutral-600">
        2009年8月7日 すがわら一秀
        <span className="block mt-4">
          個人情報保護方針に関するお問い合わせ先：<br />
          〒178-0063 練馬区東大泉1-34-8 すがわら一秀事務所<br />
          TEL.03-5935-7777　FAX.03-5935-7778
        </span>
      </div>
    </section>
  );
}
