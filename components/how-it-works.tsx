"use client";

import { QrCode, BellRing, Hospital } from "lucide-react";

const steps = [
  {
    icon: QrCode,
    title: "Scan the QR Code",
    description:
      "Scan your QR tag. No app needed — your emergency profile opens instantly.",
  },
  {
    icon: BellRing,
    title: "Instant Alert Sent",
    description:
      "Send an instant alert to your family with your live location and message.",
  },
  {
    icon: Hospital,
    title: "Get Help Nearby",
    description:
      "View medical details and nearby hospitals so responders can act fast.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full h-full">
      <div className="max-w-7xl mx-auto py-12 lg:py-24 px-4">
        
        {/* Heading */}
        <div className="text-center mb-12 flex flex-col items-center gap-4">
          <h2 className="text-3xl lg:text-5xl font-semibold">
            How ArogyAura{" "}
            <span className="text-(--brand-primary)">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-md">
            Three simple steps to secure your medical future and ensure you're
            never alone in a crisis.
          </p>
        </div>

        {/* Steps Wrapper */}
        <div className="relative">
          
          {/* Dotted Arrow Line (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full -translate-y-1/2 z-0">
            <svg width="100%" height="80">
              <line
                x1="5%"
                y1="40"
                x2="95%"
                y2="40"
                stroke="var(--brand-primary)"
                strokeWidth="3"
                strokeDasharray="5 5"
                opacity="0.4"
              />
              <polygon
                points="95,40 88,35 88,45"
                fill="var(--brand-primary)"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center p-6 pt-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-white/5 backdrop-blur transition-all h-full"
                >
                  {/* Step Pill */}
                  <span className="absolute top-4 left-4 text-xs tracking-wide font-medium bg-(--brand-primary) text-white px-3 py-1 rounded-full border border-(--brand-primary)/20">
                    Step {index + 1}
                  </span>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-(--brand-primary)/10 mb-4">
                    <Icon className="w-7 h-7 text-(--brand-primary)" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground min-h-18 md:min-h-16">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;