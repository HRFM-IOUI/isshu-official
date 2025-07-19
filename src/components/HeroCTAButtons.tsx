import { motion } from "framer-motion";

export default function HeroCTAButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.7 }}
      className="flex flex-col md:flex-row gap-5 mt-12"
    >
      <a
        href="#vision"
        className="bg-gradient-to-br from-white/95 to-blue-100/70 text-blue-700 rounded-full px-12 py-4 font-bold text-xl shadow-lg shadow-blue-100/60 border border-blue-200/60 hover:bg-blue-50 hover:scale-105 hover:shadow-[0_8px_32px_rgba(34,115,217,0.16)] transition duration-150"
      >
        ビジョンを見る
      </a>
      <a
        href="#profile"
        className="bg-gradient-to-br from-blue-600/90 to-blue-500/80 border-2 border-white text-white rounded-full px-12 py-4 font-bold text-xl shadow-lg shadow-blue-500/50 hover:bg-blue-700 hover:scale-105 hover:shadow-2xl hover:border-blue-200 transition duration-150"
      >
        プロフィール
      </a>
    </motion.div>
  );
}
