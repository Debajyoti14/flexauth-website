import { Features } from "@/components/Features";
import { LetsGetStarted } from "@/components/GetStarted";
import Secure from "@/components/Secure";
import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
import Teams from "@/components/Teams";

export default function Home() {
  return (
    <main>
      <Hero />
      <Secure />
      <UseCases />
      <Features />
      <LetsGetStarted />
      <Teams />
    </main>
  );
}
