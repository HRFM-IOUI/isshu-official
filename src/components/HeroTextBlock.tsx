import { motion } from "framer-motion";

export default function HeroTextBlock() {
  return (
    <>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-white text-2xl md:text-5xl font-light mb-6 drop-shadow-xl tracking-tight text-center"
      >
        変革と信頼の政治を、あなたと共に。
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="text-white text-[60px] md:text-[104px] font-extrabold leading-none mb-6 drop-shadow-[0_4px_32px_rgba(0,0,0,0.33)] tracking-tight text-center"
        style={{
          textShadow: "0 2px 16px rgba(0,0,0,0.28), 0 0 8px white",
        }}
      >
        菅原一秀
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.6 }}
        className="flex flex-col md:flex-row gap-3 md:gap-5 mt-4 items-center"
      >
        <span className="text-white text-lg md:text-2xl font-semibold drop-shadow-md">
          前衆議院議員
        </span>
        <span className="hidden md:inline text-white text-2xl font-bold">・</span>
        <span className="text-white text-base md:text-lg">
          公式Webサイト
        </span>
      </motion.div>
    </>
  );
}
