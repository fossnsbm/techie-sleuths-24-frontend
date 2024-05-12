"use client";
import NavigationLinks from "@/data/nav/nav";
import { useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";

export default function NavigationMenuHamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [activeLink, setActiveLink] = useState<number | null>(null);
  return (
    <div className="flex flex-col items-end justify-center z-50 p-5">
      <button onClick={handleClick}>
        {/* Hamburger icon */}
        <span
          className={`bg-gray-900 block transition-all duration-300 ease-out h-1 w-6  ${
            isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-gray-900 block h-1 w-6  my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-gray-900 block transition-all duration-300 ease-out h-1 w-6  ${
            isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div
        className={`absolute right-0 mt-64 w-48 rounded-md shadow-lg bg-gray-0 z-50 ring- p-5 justify-center items-center transition-all duration-200 ease-in-out gap-5 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
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
                className={`block px-6 py-2 text-xl text-sky-900 hover ${
                  item.id === activeLink
                    ? buttonVariants({
                        variant: "default",
                        size: "lg",
                      })
                    : ""
                }`}
              >
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
