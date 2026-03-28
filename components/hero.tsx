"use client";

import { Button } from "./ui/button";
import Hero3DCard from "./hero-card";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full min-h-[calc(100vh-64px)] flex items-center">
      <div className="w-full h-[stretch] max-w-340 mx-auto px-4 py-8 lg:py-0 lg:px-12 grid grid-cols-1  lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start order-last lg:order-first">
          {/* BADGE */}
          <div className="w-fit px-4 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
            ● PEACE OF MIND GUARANTEED
          </div>

          {/* HEADING */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
            Your Life-Saving <br />
            Identity in
            <br />
            <span className="text-(--brand-primary)">Emergencies.</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-muted-foreground text-base max-w-md">
            Scan. Access. Save lives. Instantly bridge the gap between emergency
            responders and your critical medical information when seconds matter
            most.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-2">
            <Button className="flex-1 sm:flex-none bg-(--brand-primary) text-white p-6 rounded-xl text-md hover:opacity-90">
              Get Your Smart Tag
              <ArrowUpRight className="w-5 h-5" />
            </Button>
            <Button
              variant="secondary"
              className="flex-1 sm:flex-none rounded-xl text-md p-6"
            >
              How It Works
            </Button>
          </div>
        </div>

        {/* RIGHT CONTENT - Card first on mobile */}
        <div className="flex justify-center lg:justify-end order-first lg:order-last">
          <Hero3DCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
