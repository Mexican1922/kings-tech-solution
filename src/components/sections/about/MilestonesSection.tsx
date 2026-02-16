import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { milestones } from "@/data/aboutData";

const MilestonesSection: React.FC = () => (
  <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
          Our Journey
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
          Key Milestones
        </h2>
        <div
          className="w-20 h-1 bg-green-600 rounded-full mx-auto"
          aria-hidden="true"
        />
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        <div className="relative" role="list">
          {/* Vertical line (desktop only) */}
          <div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"
            aria-hidden="true"
          />

          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative mb-12 ${isEven ? "md:pr-1/2" : "md:pl-1/2"}`}
                role="listitem"
              >
                <div
                  className={`md:w-1/2 ${isEven ? "md:ml-auto md:pl-12" : "md:pr-12"}`}
                >
                  <Card className="border-2 border-green-100 hover:border-green-300 transition-all hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        {/* Year badge - use <time> for semantic value */}
                        <time
                          dateTime={milestone.year}
                          className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                        >
                          {milestone.year}
                        </time>
                        <h3 className="text-xl font-bold text-gray-900">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed font-maven">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot (desktop only) */}
                <div
                  className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default MilestonesSection;
