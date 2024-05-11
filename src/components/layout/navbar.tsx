"use client";
import Image from "next/image";
import Container from "../layout/Container";
import { Navigation } from "lucide-react";
import NavigationLinks from "@/data/nav/nav";
import Link from "next/link";
import { it } from "node:test";
import { Button, buttonVariants } from "../ui/button";

export default function NavBar() {
  return (
    <div className="bg-sky-200">
      <Container>
        <div className="py-8 flex flex-row justify-between ">
          <div className="md:w-auto w-1/2 flex">
            <Image
              src="/assets/logos/techie_sleuths_logo_new.png"
              alt="Techie Sleuths"
              width={200}
              height={200}
            />
          </div>

          <div className="md:flex items-center lg:text-3xl text-2xl hidden text-sky-900 ">
            <div className="flex  gap-10 items-center">
              {NavigationLinks.map((item) => (
                <Link href={item.link} key={item.id}>
                  <div className="hover:">{item.title}</div>
                </Link>
              ))}
              <Button className="text-3xl"   size={"lg"}>
                Regiter{" "}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
