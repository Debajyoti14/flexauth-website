import { BentoGridSecondDemo } from "@/components/Features";
import { CanvasRevealEffectDemo } from "@/components/GetStarted";
import Hero from "@/components/Hero";
import Usecase from "@/components/Usecase";

export default function Home() {
  return (
    <main>
      <Hero />
      <Usecase />
      <BentoGridSecondDemo />
      <CanvasRevealEffectDemo />
    </main>
  );
}
