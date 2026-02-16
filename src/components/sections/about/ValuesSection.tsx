import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { values } from "@/data/aboutData";

const ValuesSection: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
          What Drives Us
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
          Our Core Values
        </h2>
        <div
          className="w-20 h-1 bg-green-600 rounded-full mx-auto"
          aria-hidden="true"
        />
        <p className="text-lg text-gray-600 mt-6 font-maven">
          These principles guide every decision we make and every interaction we
          have
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <Card
              key={index}
              className="border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all group"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  <Icon
                    className="w-7 h-7 text-green-600 group-hover:text-white transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-maven">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);

export default ValuesSection;
