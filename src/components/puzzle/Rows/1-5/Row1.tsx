"use client";

import React from "react";

import { Button } from "@/components/ui/button";

import Cell from "../../Cell";

const RowOne = () => {
  const elements = [
    <div key={"p-1-1"} />,
    <div key={"p-1-2"} />,
    <div key={"p-1-3"} />,
    <div key={"p-1-4"} />,
    <div key={"p-1-5"} />,
    <div key={"p-1-6"} />,
    <div key={"p-1-7"} />,
    <div key={"p-1-8"} />,
    <Cell
      key={"p-1-9"}
      cellNumber={13}
      clues={[{ clueNumber: 1, clueDirection: "d" }]}
      clueIndex={1}
    />,
    <div key={"p-1-10"} />,
    <Cell
      key={"p-1-11"}
      cellNumber={18}
      clues={[{ clueNumber: 2, clueDirection: "d" }]}
      clueIndex={2}
    />,
    <div key={"p-1-12"} />,
    <div key={"p-1-13"} />,
    <div key={"p-1-14"} />,
    <div key={"p-1-15"} />,
    <div key={"p-1-16"} />,
    <div key={"p-1-17"} />,
    <div key={"p-1-18"} />,
    <div key={"p-1-19"} />,
    <div key={"p-1-20"} />,
    <div key={"p-1-21"} />,
    <div key={"p-1-22"} />,
  ];

  return elements;
};

export default RowOne;
