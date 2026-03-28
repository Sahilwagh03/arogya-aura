import Features from "@/components/features";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Products from "@/components/products";
import Stats from "@/components/stats";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero/>
      <Stats/>
      <HowItWorks/>
      <Features/>
      <Products/>
    </div>
  );
}
