import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/about/HeroSection";
import StorySection from "@/components/sections/about/StorySection";
import MissionVisionSection from "@/components/sections/about/MissionVisionSection";
import ValuesSection from "@/components/sections/about/ValuesSection";
import MilestonesSection from "@/components/sections/about/MilestonesSection";
import TeamSection from "@/components/sections/about/TeamSection";
// import StatsSection from "@/components/sections/about/StatsSection";
// import LocationsSection from "@/components/sections/about/LocationsSection";
import CTASection from "@/components/sections/about/CTASection";
import "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <MissionVisionSection />
        <ValuesSection />
        <MilestonesSection />
        <TeamSection />
        {/* <StatsSection />
        <LocationsSection /> */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
