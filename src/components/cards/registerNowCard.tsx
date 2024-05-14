"use client";

import React from "react";
import Container from "../layout/Container";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function RegisterNowCard() {
  return (
    <div className="bg-slate-900">
      <Container>
        <div className="relative flex items-center justify-center py-12">
          <Image
            src="/assets/register-now-bg.png"
            width={1200}
            height={100}
            alt="Register Now"
          />
          <div className="w-full absolute z-10 flex flex-col gap-8 md:flex-row items-center justify-between lg:px-36 md:px-16">
            <div className="w-full md:w-1/2 uppercase text-base md:text-3xl lg:text-6xl">
              Register now for the most awaited Treasure Hunt!
            </div>
            <div className="flex flex-col gap-6 items-center justify-center">
              <Link href="/register">
                <Button size="lg">Register now</Button>
              </Link>
              <div className="md:text-base font-mono text-center">
                *The registration will be opening soon
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
