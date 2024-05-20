import React from "react";

import Cell from "../../Cell";

const RowTwentyThree = () => {
  const elements = [
    <div key={"p-23-1"} />,
    <div key={"p-23-2"} />,
    <div key={"p-23-3"} />,
    <div key={"p-23-4"} />,
    <div key={"p-23-5"} />,
    <div key={"p-23-6"} />,
    <div key={"p-23-7"} />,
    <div key={"p-23-8"} />,
    <div key={"p-23-9"} />,
    <Cell
      key={"p-23-10"}
      cellNumber={59}
      clues={[{ clueNumber: 16, clueDirection: "d" }]}
    />,
    <div key={"p-23-11"} />,
    <Cell
      key={"p-23-12"}
      cellNumber={63}
      clues={[{ clueNumber: 17, clueDirection: "d" }]}
    />,
    <div key={"p-23-13"} />,
    <div key={"p-23-14"} />,
    <Cell
      key={"p-23-15"}
      cellNumber={72}
      clues={[{ clueNumber: 18, clueDirection: "d" }]}
    />,
    <div key={"p-23-16"} />,
    <div key={"p-23-17"} />,
    <div key={"p-23-18"} />,
    <div key={"p-23-19"} />,
    <div key={"p-23-20"} />,
    <div key={"p-23-21"} />,
    <div key={"p-23-22"} />,
  ];

  return elements;
};

export default RowTwentyThree;
