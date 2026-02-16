import React from "react";
import { Button } from "@/components/ui/button";
import { COMPANY_NAME } from "@/lib/constant";

const CTASection: React.FC = () => (
  <section className="py-20 bg-white" role="region" aria-label="Call to action">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 md:p-12 shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Join Our Growing Family?
        </h2>
        <p className="text-lg md:text-xl text-green-50 mb-8 font-maven">
          Experience the {COMPANY_NAME} difference. Let's power your future
          together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center font-maven">
          <Button
            size="lg"
            className="bg-white text-green-700 hover:bg-gray-100 text-base md:text-lg px-6 md:px-8"
            asChild
          >
            <a href="/contact-us">Contact Us Today</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700 text-base md:text-lg px-6 md:px-8"
            asChild
          >
            <a href="/products">Explore Solutions</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
