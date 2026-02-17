import React from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const WHATSAPP_NUMBER = "2348137306375";
const WHATSAPP_CHAT_URL = `https://api.whatsapp.com/send/?text=Hi%20KingsTech-Solution,%20I%20have%20a%20question&phone=${WHATSAPP_NUMBER}`;

const FAQS: FAQ[] = [
  {
    question: "What services does KingsTech-Solutions provide?",
    answer:
      "KingsTech-Solutions specializes in smart energy and security solutions including solar system installations, CCTV surveillance systems, professional house wiring, and perimeter fencing solutions for homes and businesses across Nigeria.",
  },
  {
    question: "Do you install complete solar power systems?",
    answer:
      "Yes, we provide complete solar power solutions including panels, inverters, batteries, charge controllers, and full installation services. Our systems are designed to provide reliable and efficient power for residential and commercial properties.",
  },
  {
    question: "Do you supply and install CCTV security systems?",
    answer:
      "Absolutely. We install high-quality CCTV surveillance systems for homes, offices, schools, warehouses, and commercial buildings. Our systems include remote viewing capabilities so you can monitor your property from anywhere.",
  },
  {
    question: "Do you handle electrical wiring for new and existing buildings?",
    answer:
      "Yes, we offer professional house wiring services for new constructions, renovations, and upgrades. Our certified technicians ensure safe, compliant, and efficient electrical installations.",
  },
  {
    question: "What types of fencing solutions do you offer?",
    answer:
      "We provide durable and secure fencing solutions including electric fencing and other perimeter security systems designed to protect residential and commercial properties.",
  },
  {
    question: "Do you offer maintenance and after-installation support?",
    answer:
      "Yes, we provide ongoing maintenance, system upgrades, troubleshooting, and technical support to ensure your solar and security systems operate at peak performance.",
  },
  {
    question: "Are your services available nationwide?",
    answer:
      "Yes, KingsTech-Solutions delivers professional smart energy and security services across Nigeria. Contact us to confirm availability in your location.",
  },
  {
    question: "How can I request a quote?",
    answer:
      'You can request a free quote by clicking the "Get a Quote" button on our website or visiting our Contact page. Our team will assess your needs and provide a tailored solution and pricing estimate.',
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 font-maven">
            Find answers to common questions about our solar products and
            services
          </p>
          <div className="w-20 h-1 bg-green-600 rounded-full mx-auto mt-4" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg border border-gray-200 px-6 hover:border-green-200 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6 font-maven">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center font-maven">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            aria-label="Contact options"
          >
            <Button
              className="bg-green-600 hover:bg-green-700 text-white"
              asChild
            >
              <a
                href={WHATSAPP_CHAT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with Us
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50"
              asChild
            >
              <Link to="/contact-us">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
