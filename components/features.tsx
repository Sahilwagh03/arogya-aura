"use client";

import { Shield, MapPin, BellRing, QrCode, HeartPulse } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Instant Alerts",
    description:
      "Notify your family instantly with your live location in emergencies.",
    icon: BellRing,
    image: "/instant-alert.jpeg",
    hasImage: true,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "QR Emergency Access",
    description:
      "Scan your QR tag to access critical medical details instantly.",
    icon: QrCode,
    hasImage: false,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Live Location",
    description: "Share your real-time location with trusted contacts.",
    icon: MapPin,
    image: "/live-location.jpeg",
    hasImage: true,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Medical Profile",
    description: "Store vital health details for quick emergency access.",
    icon: HeartPulse,
    hasImage: false,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Always Protected",
    description: "Your safety data is secure and always accessible.",
    icon: Shield,
    hasImage: false,
    className: "md:col-span-1 md:row-span-1",
  },
];

const Features = () => {
  return (
    <section className="w-full bg-neutral-100">
      <div className="max-w-340 mx-auto py-12 lg:py-24 px-4 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:items-start md:justify-between gap-2 mb-10 lg:mb-14">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold leading-tight">
            Features
          </h2>

          <p className="text-muted-foreground max-w-xl text-sm md:text-base">
            Everything you need to stay safe in emergencies — from instant
            alerts to real-time medical access, designed for speed, simplicity,
            and peace of mind.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`rounded-3xl border border-neutral-200 bg-white flex flex-col justify-between overflow-hidden ${feature.className}`}
              >
                {/* Content */}
                <div className="p-6 pb-3">
                  <div className="w-12 h-12 rounded-xl bg-(--brand-primary)/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-(--brand-primary)" />
                  </div>

                  <h3 className="text-lg font-semibold mb-1">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>

                {/* Image */}
                {feature.hasImage && (
                  <div className="px-6 pb-6 flex-1 flex">
                    <div className="w-full rounded-2xl overflow-hidden group h-full">
                      <Image
                        width={1280}
                        height={800}
                        src={feature.image!}
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
