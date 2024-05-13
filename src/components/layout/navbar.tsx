"use client";
import Image from "next/image";
import Container from "../layout/Container";
import NavigationLinks from "@/data/nav/nav";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import NavigationMenuHamburger from "./nav-hamburger";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState<number | null>(null);
  return (
    <div className="bg-sky-200">
      <Container>
        <div className="min-h-[15vh] flex flex-row justify-between ">
          <Link href={"/"} className="md:w-auto w-1/3 flex items-center">
            <Image
              src="/assets/logos/techie_sleuths_logo_new.png"
              alt="Techie Sleuths"
              width={170}
              height={170}
            />
          </Link>

          <div className="md:flex items-center lg:text-3xl text-2xl hidden text-sky-900 ">
            <div className="flex  gap-10 items-center">
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
            <Link href={"/register"}>
              <Button className="ml-10">
                REGISTER NOW
              </Button>
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
