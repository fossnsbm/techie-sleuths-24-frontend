import React from "react";

import Cell from "../../Cell";

const RowThree = () => {
  const elements = [
    <div key={"p-3-1"} />,
    <Cell
      key={"p-3-2"}
      cellNumber={1}
      clues={[{ clueNumber: 3, clueDirection: "d" }]}
      clueIndex={3}
    />,
    <div key={"p-3-3"} />,
    <div key={"p-3-4"} />,
    <div key={"p-3-5"} />,
    <Cell
      key={"p-3-6"}
      cellNumber={9}
      clues={[{ clueNumber: 4, clueDirection: "d" }]}
      clueIndex={4}
    />,
    <div key={"p-3-7"} />,
    <div key={"p-3-8"} />,
    <Cell
      key={"p-3-9"}
      cellNumber={15}
      clues={[{ clueNumber: 1, clueDirection: "d" }]}
    />,
    <div key={"p-3-10"} />,
    <Cell
      key={"p-3-11"}
      cellNumber={20}
      clues={[{ clueNumber: 2, clueDirection: "d" }]}
    />,
    <div key={"p-3-12"} />,
    <div key={"p-3-13"} />,
    <div key={"p-3-14"} />,
    <div key={"p-3-15"} />,
    <div key={"p-3-16"} />,
    <div key={"p-3-17"} />,
    <div key={"p-3-18"} />,
    <div key={"p-3-19"} />,
    <div key={"p-3-20"} />,
    <div key={"p-3-21"} />,
    <div key={"p-3-22"} />,
  ];

  return elements;
};

export default RowThree;
