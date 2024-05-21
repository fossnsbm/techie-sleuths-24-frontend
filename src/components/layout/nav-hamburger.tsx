"use client";

import { useState } from "react";

import Link from "next/link";

import NavigationLinks from "@/data/nav/nav";

import { Button, buttonVariants } from "../ui/button";

export default function NavigationMenuHamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [activeLink, setActiveLink] = useState<number | null>(null);
  return (
    <div className="z-50 flex flex-col items-end justify-center py-16">
      <button onClick={handleClick}>
        {/* Hamburger icon */}
        <span
          className={`block h-1 w-6 bg-gray-900 transition-all duration-300 ease-out  ${
            isOpen ? "translate-y-1.5 rotate-45" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`my-0.5 block h-1 w-6  bg-gray-900 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-gray-900 transition-all duration-300 ease-out  ${
            isOpen ? "-translate-y-1.5 -rotate-45" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div
        className={`bg-gray-0 ring- absolute right-0 z-50 mt-64 w-48 items-center justify-center gap-5 rounded-md bg-sky-100 p-5 shadow-lg transition-all duration-200 ease-in-out ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className={`py-1 transition-all duration-200 ease-in-out ${
            isOpen ? "opacity-100 delay-100" : "opacity-0 delay-0"
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {NavigationLinks.map((item) => (
            <Link href={item.link} key={item.id}>
              <div
                onClick={() => setActiveLink(item.id)}
                className={`block px-6 py-2 text-xl text-sky-900 ${
                  item.id === activeLink ? "underline" : ""
                }`}
              >
                {item.title}
              </div>
            </Link>
          ))}
        </div>

        <Link href={"/login"}>
          <Button className="ml-10">LOGIN</Button>
        </Link>
      </div>
    </div>
  );
}
