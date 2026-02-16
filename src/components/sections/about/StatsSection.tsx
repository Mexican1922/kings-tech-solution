import React from "react";
import { stats } from "@/data/aboutData";

const StatsSection: React.FC = () => (
  <section className="py-20 bg-gradient-to-br from-green-700 to-green-600">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Impact by Numbers
        </h2>
        <p className="text-xl text-green-50">
          Our growth reflects the trust our customers place in us
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-5xl font-bold text-white mb-2">{stat.number}</p>
            <p className="text-green-100 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
