"use client";

import Container from "@/components/layout/Container";
import { RootState } from "@/store";

import React from "react";
import { useSelector } from "react-redux";

export default function ExampleCard() {
  const teamName = useSelector(
    (state: RootState) => state.teamDetails.teamName,
  );

  return (
    <Container>
      <div>
        {teamName !== "" ? (
          <>
            <h2 className="text-gray-700 text-lg lg:text-2xl">Welcome</h2>
            <h1 className="text-4xl lg:text-8xl font-bold">{teamName}</h1>
          </>
        ) : null}
      </div>
    </Container>
  );
}
