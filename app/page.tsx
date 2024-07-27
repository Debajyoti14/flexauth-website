import { BentoGridThirdDemo } from "@/components/Features";
import { CanvasRevealEffectDemo } from "@/components/GetStarted";
import Secure from "@/components/Secure";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Secure />
      <BentoGridThirdDemo />
      <CanvasRevealEffectDemo />
    </main>
  );
}
