"use client";

const LINKS = [
  {
    category: "各リンク先のご案内",
    items: [
      {
        label: "自民党",
        img: "/logo-jimin.png",
        url: "http://www.jimin.jp/",
      },
      {
        label: "TOKYO自民党",
        img: "/logo-tokyojimin.png",
        url: "https://www.tokyo-jimin.jp/",
      },
      {
        label: "練馬区",
        img: "/logo-nerima.png",
        url: "http://www.city.nerima.tokyo.jp/",
      },
    ],
  },
  {
    category: "練馬区内で頑張っている方々",
    items: [
      {
        label: "石神井太鼓保存会 せんば太鼓",
        img: "/logo-senba.png",
        url: "http://www.senbadaiko.com",
      },
    ],
  },
];

export default function LinkPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-extrabold mb-10 text-neutral-800 border-l-8 border-[#369bfd] pl-6 bg-gradient-to-r from-blue-50 to-white rounded-r-md shadow-sm">
        リンク集
      </h1>
      {LINKS.map((section) => (
        <div key={section.category} className="mb-14">
          <h2 className="text-lg font-bold bg-gradient-to-r from-blue-700 via-blue-400 to-blue-200 text-white px-5 py-2 rounded-lg shadow mb-6">
            {section.category}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {section.items.map((item) => (
              <a
                href={item.url}
                key={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 border-2 border-blue-100 rounded-xl p-5 bg-white shadow-lg hover:shadow-2xl hover:border-[#369bfd] group transition-all duration-200 focus:ring-2 focus:ring-[#369bfd] focus:outline-none"
              >
                <div className="w-20 h-12 flex items-center justify-center bg-gradient-to-tr from-blue-100 to-blue-50 rounded-lg overflow-hidden shadow-sm mr-2">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="h-10 w-16 object-contain transition-transform duration-200 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>
                <span className="font-bold text-blue-700 text-lg group-hover:text-[#C8102E] transition-colors">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
