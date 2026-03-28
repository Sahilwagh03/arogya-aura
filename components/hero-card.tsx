"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function Hero3DCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const baseRotate = { x: 10, y: -10 };
  const [rotate, setRotate] = useState(baseRotate);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = baseRotate.x - (y - centerY) / 25;
    const rotateY = baseRotate.y + (x - centerX) / 25;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleLeave = () => {
    setRotate(baseRotate);
  };

  return (
    <section className="w-full flex justify-center items-center">
      <div
        className="perspective-[1000px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
      >
        <div
          ref={cardRef}
          style={{
            transform: `
              rotateX(${rotate.x}deg)
              rotateY(${rotate.y}deg)
            `,
          }}
          className="max-w-88 w-full h-full rounded-2xl bg-(--brand-primary) border border-white/10 shadow-2xl flex flex-col items-center justify-center gap-5 transition-transform duration-300 ease-out p-4"
        >
          <p className="text-white text-xs tracking-widest uppercase">
            Scan for Help
          </p>
          <div>
            <Image
              src="/ArogyaAuraQR.png"
              alt="QR Code"
              width={1280}
              height={1280}
              className="w-full h-full"
            />
          </div>

          {/* Brand */}
          <div className="text-white text-lg font-medium flex items-center gap-2">
            <div className="bg-white p-2 rounded-lg w-fit">
            <Image src="/logo.png" alt="Arogya Aura" width={100} height={100} className="w-3 h-3"/>
            </div>
            Arogya Aura
          </div>
        </div>
      </div>
    </section>
  );
}