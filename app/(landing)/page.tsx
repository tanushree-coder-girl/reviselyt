import { Footer, Hero, CTA, WhyOpenSource, Purpose, Features } from "./components";
import Header from "@/components/common/Header";

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col bg-white text-gray-900">
      <Header variant="landing" />
      <Hero />
      <Features />
      <Purpose />
      <WhyOpenSource />
      <CTA />
      <Footer />
    </main>
  );
}

