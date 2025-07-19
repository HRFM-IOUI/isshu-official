import HeroImage from "@/components/HeroImage";
import HeroTextBlock from "@/components/HeroTextBlock";
import HeroCTAButtons from "@/components/HeroCTAButtons";
import HeroWaveDecoration from "@/components/HeroWaveDecoration";

export default function HeroSection() {
  return (
    <>
      <HeroImage />
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-28">
        <HeroTextBlock />
        <HeroCTAButtons />
      </div>
      <HeroWaveDecoration />
    </>
  );
}
