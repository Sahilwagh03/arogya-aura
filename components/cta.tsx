"use client";

import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto">
        <div className="bg-(--brand-primary) rounded-3xl px-6 sm:px-12 py-24 text-center text-white shadow-lg">
          
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-semibold">
            Ready to Transform <br className="hidden sm:block" />
            Your Safety?
          </h2>

          {/* Subtext */}
          <p className="mt-4 text-sm sm:text-base max-w-xl mx-auto">
            Join over 50,000 users who trust ArogyaAura to keep their vital
            information accessible when it matters most.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Primary Button */}
            <Button className="cursor-pointer bg-white text-(--brand-primary) hover:bg-white/90 rounded-2xl p-6 text-md font-semibold">
              Get Started Now
            </Button>

            {/* Secondary Button */}
            <Button
              className="cursor-pointer bg-transparent border-(--brand-secondary) rounded-2xl p-6 text-md font-semibold"
            >
              Speak to an Expert
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;