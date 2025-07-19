"use client";
import Image from "next/image";
import { FaYoutube, FaExternalLinkAlt } from "react-icons/fa";

const photos = [
  { src: "/government/photo1.jpg", alt: "活動写真1" },
  { src: "/government/photo2.jpg", alt: "活動写真2" },
  { src: "/government/photo3.jpg", alt: "活動写真3" },
  // ...追加OK
];

const videos = [
  {
    date: "2014.10.03",
    title: "衆議院予算委員会質問「正競争を！」",
    url: "#",
    duration: "所要45分",
  },
  {
    date: "2012.08.21",
    title: "国土交通委員会質問「市場における公平競争を！」",
    url: "#",
    duration: "所要32分",
  },
  // ...追加OK
];

export default function GovernmentPage() {
  return (
    <section className="max-w-4xl mx-auto py-14 px-4">
      {/* セクションタイトル */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#003399] mb-10 tracking-tight border-b-4 pb-2 border-[#369bfd] flex items-center gap-3">
        <span className="pr-3 border-l-8 border-[#0080FF] bg-gradient-to-r from-[#eef7ff] via-white to-transparent py-1 rounded-r-md shadow-sm">
          国会活動・フォトギャラリー
        </span>
      </h1>
      {/* 活動写真ギャラリー */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-14">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow-xl bg-white group hover:shadow-2xl transition-all duration-300"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={400}
              height={260}
              className="object-cover w-full h-40 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      {/* 動画・発言集 */}
      <h2 className="text-2xl font-semibold text-[#003399] mb-7 flex items-center gap-2">
        <FaYoutube className="text-[#C8102E] text-xl" />
        発言アーカイブ（動画）
      </h2>
      <ul className="space-y-4">
        {videos.map((video, i) => (
          <li
            key={i}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-2 bg-white/80 rounded-lg shadow p-5 border-l-4 border-[#C8102E]/70 hover:bg-[#f6f8ff] hover:scale-[1.02] transition-all duration-200"
          >
            <span className="font-mono text-xs text-blue-500 w-24 shrink-0">
              {video.date}
            </span>
            <a
              href={video.url}
              className="flex items-center gap-2 font-semibold text-[#C8102E] hover:underline hover:text-blue-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt className="text-xs opacity-70" />
              {video.title}
            </a>
            <span className="text-xs text-gray-400 ml-2">{video.duration}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
