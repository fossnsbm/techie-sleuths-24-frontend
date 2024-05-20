import React from "react";

import Cell from "../../Cell";

const RowTwenty = () => {
  const elements = [
    <div key={"p-20-1"} />,
    <div key={"p-20-2"} />,
    <div key={"p-20-3"} />,
    <div key={"p-20-4"} />,
    <div key={"p-20-5"} />,
    <div key={"p-20-6"} />,
    <div key={"p-20-7"} />,
    <div key={"p-20-8"} />,
    <div key={"p-20-9"} />,
    <Cell
      key={"p-20-10"}
      cellNumber={56}
      clues={[{ clueNumber: 16, clueDirection: "d" }]}
    />,
    <div key={"p-20-11"} />,
    <div key={"p-20-12"} />,
    <Cell
      key={"p-20-13"}
      cellNumber={86}
      clues={[{ clueNumber: 13, clueDirection: "d" }]}
    />,
    <div key={"p-20-14"} />,
    <div key={"p-20-15"} />,
    <div key={"p-20-16"} />,
    <div key={"p-20-17"} />,
    <div key={"p-20-18"} />,
    <div key={"p-20-19"} />,
    <div key={"p-20-20"} />,
    <div key={"p-20-21"} />,
    <div key={"p-20-22"} />,
  ];

  return elements;
};

export default RowTwenty;
