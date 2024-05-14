"use client";

import React, { useState, useEffect } from "react";
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
      <div className="text-2xl lg:text-[48px] flex flex-row items-center justify-between">
        <div className="text-nowrap bg-slate-900 pr-3">{rule.title}</div>
        <div className="hidden md:block w-full tracking-widest">
          ..............................................................
        </div>
        <div className="bg-slate-900">
          <div className="relative aspect-square h-[50px]">
            <Image alt="Logo" src="/assets/tile.png" layout="fill" />

            <label
              className="absolute z-10 text-amber-100 text-[42px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"
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

      <div className="pl-0 lg:pl-10 py-4 flex flex-col gap-3">
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
      className="text-white flex flex-col justify-center items-center"
    >
      <div className="py-16 px-12 w-full max-w-[1200px] flex flex-col gap-10">
        <div className="text-center md:text-left text-5xl md:text-6xl lg:text-7xl">
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
