import ExampleCard from "@/components/cards/ExampleCard";
import RegisterNowCard from "@/components/cards/registerNowCard";
import ExampleForm from "@/components/forms/ExampleForm";
import EventDetails from "@/components/landing/eventDetails";
import HeroSection from "@/components/landing/hero";
import RulesSection from "@/components/sections/RulesSection";

import React from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <EventDetails />
      <RulesSection />

      <div className="hidden md:block">
        <RegisterNowCard />
      </div>
    </div>
  );
}
