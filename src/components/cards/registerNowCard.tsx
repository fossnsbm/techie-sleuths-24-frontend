"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import Container from "../layout/Container";
import { Button } from "../ui/button";

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
          <div className="absolute z-10 flex w-full flex-col items-center justify-between gap-8 md:flex-row md:px-16 lg:px-36">
            <div className="w-full text-base uppercase md:w-1/2 md:text-3xl lg:text-6xl">
              Start playing!
            </div>
            <div className="flex flex-col items-center justify-center gap-6">
              <Link href="/play">
                <Button size="lg">Play</Button>
              </Link>
              <div className="text-center font-mono md:text-base">
                *The game will start soon!
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
