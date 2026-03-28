"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is ArogyaAura Smart Tag?",
    answer:
      "ArogyaAura Smart Tag is a safety device that stores your vital information and allows instant access during emergencies.",
  },
  {
    question: "How does it work?",
    answer:
      "It uses QR/NFC technology. Anyone can scan the tag to access your emergency details without needing an app.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, your data is encrypted and only accessible through authorized scans with your permission settings.",
  },
  {
    question: "Do I need a subscription?",
    answer:
      "No subscription is required. You pay once and get lifetime access to basic features.",
  },
  {
    question: "Can I update my information?",
    answer:
      "Yes, you can update your medical and emergency details anytime through your dashboard.",
  },
];

const FAQ = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-muted-foreground text-sm sm:text-base">
          Everything you need to know about our Smart Safety Tag
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto mt-10">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-xl px-5 py-2 bg-white shadow-sm"
            >
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-3">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;