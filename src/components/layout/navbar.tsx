"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import NavigationLinks from "@/data/nav/nav";

import Container from "../layout/Container";
import { Button } from "../ui/button";
import NavigationMenuHamburger from "./nav-hamburger";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState<number | null>(null);
  return (
    <div className="bg-sky-200">
      <Container>
        <div className="flex min-h-[15vh] flex-row justify-between ">
          <Link href={"/"} className="flex w-1/3 items-center md:w-auto">
            <Image
              src="/assets/logos/techie_sleuths_logo_new.png"
              alt="Techie Sleuths"
              width={170}
              height={170}
            />
          </Link>

          <div className="hidden items-center text-2xl text-sky-900 md:flex lg:text-3xl ">
            <div className="flex  items-center gap-10">
              {NavigationLinks.map((item) => (
                <Link href={item.link} key={item.id}>
                  <div
                    onClick={() => setActiveLink(item.id)}
                    className={` ${item.id === activeLink ? "underline" : ""}`}
                  >
                    {item.title}
                  </div>
                </Link>
              ))}
            </div>

            <Link href={"/login"}>
              <Button className="ml-10 text-2xl">LOGIN</Button>

            </Link>
          </div>

          <div className="md:hidden">
            <NavigationMenuHamburger />
          </div>
        </div>
      </Container>
    </div>
  );
}
