"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="w-full border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold">ArogyaAura</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Your life-saving smart tag. Keep your vital information accessible
              when it matters the most.
            </p>

            {/* CTA */}
            <Button className="mt-5 bg-(--brand-primary) text-white rounded-xl p-4">
              Get Started
            </Button>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">How it Works</Link></li>
              <li><Link href="#">Pricing</Link></li>
              <li><Link href="#">FAQs</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Contact</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest updates and offers.
            </p>

            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-(--brand-primary)"
              />
              <Button className="rounded-lg bg-(--brand-primary) text-white p-4">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-border" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ArogyaAura. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;