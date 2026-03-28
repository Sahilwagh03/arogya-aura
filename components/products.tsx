"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const products = [
  {
    title: "Standard Keychain",
    description:
      "Medical-grade silicone. Weatherproof and lightweight.",
    price: "₹499",
    image:
      "/product-1.png",
  },
  {
    title: "Premium Metal",
    description:
      "Surgical steel with laser-etched QR. Lifetime durability.",
    price: "₹999",
    image:
      "/product-2.png",
    tag: "Bestseller",
  },
  {
    title: "Family Pack",
    description:
      "Set of 4 keychains. Best value for whole family protection.",
    price: "₹1,499",
    image:
      "/product-3.png",
  },
];

const Products = () => {
  return (
    <section className="w-full bg-neutral-50">
      <div className="max-w-340 mx-auto px-4 lg:px-12 py-12 lg:py-24">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold mb-3">
            Choose <span className="text-(--brand-primary)">Your</span> ArogyAura
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Simple, powerful safety solutions designed for everyday life.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const isBest = product.tag === "Bestseller";

            return (
              <div
                key={index}
                className={cn(
                  "relative p-6 rounded-3xl overflow-hidden flex flex-col text-center transition-all group",
                  isBest
                    ? "border-2 border-(--brand-primary) bg-(--brand-primary)/5 shadow-lg scale-[1.02]"
                    : "border bg-white hover:shadow-xl"
                )}
              >
                {/* Tag */}
                {product.tag && (
                  <span className="absolute top-4 right-4 text-xs bg-(--brand-primary) text-white px-3 py-1 rounded-full z-10">
                    {product.tag}
                  </span>
                )}

                {/* Image */}
                <div className="relative rounded-2xl w-full h-56 overflow-hidden mb-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Optional subtle overlay for premium feel */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {product.description}
                    </p>
                  </div>

                  {/* Price + CTA */}
                  <div className="mt-auto">
                    <div className="text-2xl font-bold mb-4">
                      {product.price}
                    </div>

                    <button
                      className={cn(
                        "w-full flex items-center cursor-pointer justify-center gap-2 py-3 rounded-xl text-sm transition",
                        isBest
                          ? "bg-(--brand-primary) text-white hover:opacity-90"
                          : "bg-black text-white hover:opacity-90"
                      )}
                    >
                      Add to Cart
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;