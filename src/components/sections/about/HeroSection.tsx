import React from "react";
import { COMPANY_NAME } from "@/lib/constant";

// Optional: move pattern to a constant for cleaner JSX
const GRID_PATTERN = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

const HeroSection: React.FC = () => (
  <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-gradient-to-br from-green-700 via-green-600 to-green-500 overflow-hidden">
    <div className="absolute inset-0 opacity-10" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: GRID_PATTERN }}
      />
    </div>

    <div className="container mx-auto px-4 text-center relative z-10">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
        About {COMPANY_NAME}
      </h1>
      <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto mb-8 font-maven">
        Powering Nigeria's future with reliable, sustainable solar energy
        solutions since 2023
      </p>
      <div
        className="w-24 h-1 bg-white rounded-full mx-auto"
        aria-hidden="true"
      />
    </div>

    <div
      className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"
      aria-hidden="true"
    />
    <div
      className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full"
      aria-hidden="true"
    />
  </section>
);

export default HeroSection;
