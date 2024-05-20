"use client";

import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/store";

import Container from "@/components/layout/Container";

export default function ExampleCard() {
  const teamName = useSelector(
    (state: RootState) => state.teamDetails.teamName,
  );

  return (
    <Container>
      <div>
        {teamName !== "" ? (
          <>
            <h2 className="text-lg text-gray-700 lg:text-2xl">Welcome</h2>
            <h1 className="text-4xl font-bold lg:text-8xl">{teamName}</h1>
          </>
        ) : null}
      </div>
    </Container>
  );
}
