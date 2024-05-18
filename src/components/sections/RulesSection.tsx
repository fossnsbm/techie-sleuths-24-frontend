"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";

import Rules from "@/data/rules/rules";

import type { Rule } from "@/types/rule";

function RulesSectionRule(rule: Rule) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 632);
    };

    // Check if window is defined (i.e., we're in a browser)
    if (typeof window !== "undefined") {
      // Set initial state
      checkScreenSize();
      // Add event listener
      window.addEventListener("resize", checkScreenSize);
    }

    return () => {
      // Remove event listener
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", checkScreenSize);
      }
    };
  }, []);
  return (
    <div>
      <div className="flex flex-row items-center justify-between text-2xl lg:text-[48px]">
        <div className="text-nowrap bg-slate-900 pr-3">{rule.title}</div>
        <div className="hidden w-full tracking-widest md:block">
          ..............................................................
        </div>
        <div className="bg-slate-900">
          <div className="relative aspect-square h-[50px]">
            <Image alt="Logo" src="/assets/tile.png" layout="fill" />

            <label
              className="absolute left-1/2 top-1/2 z-10 translate-x-[-50%] translate-y-[-50%] text-[42px] text-amber-100"
              style={{
                textShadow: isSmallScreen
                  ? "3px 3px #78350F"
                  : "6px 6px #78350F",
              }}
            >
              {rule.id}
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 py-4 pl-0 lg:pl-10">
        {rule.description?.map((desc, index) => (
          <p className="font-mono font-bold text-white/75" key={index}>
            [+] {desc}
          </p>
        ))}
      </div>
    </div>
  );
}

function RulesSection() {
  return (
    <section
      id="eligibility"
      className="flex flex-col items-center justify-center text-white"
    >
      <div className="flex w-full max-w-[1200px] flex-col gap-10 px-12 py-16">
        <div className="text-center text-5xl md:text-left md:text-6xl lg:text-7xl">
          <label className="" style={{ lineHeight: "36px" }}>
            Contest
          </label>
          <h2 className="text-amber-400" style={{ lineHeight: "36px" }}>
            Rules N Regulations
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {Rules.map((rule) => (
            <RulesSectionRule key={rule.id} {...rule} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RulesSection;
