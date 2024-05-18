import React from "react";

import ExampleForm from "@/components/forms/ExampleForm";

import ExampleCard from "@/components/cards/ExampleCard";
import RegisterNowCard from "@/components/cards/registerNowCard";

import HeroSection from "@/components/landing/hero";
import EventDetails from "@/components/landing/eventDetails";

import RulesSection from "@/components/sections/RulesSection";

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
