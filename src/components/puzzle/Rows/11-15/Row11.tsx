import React from "react";

import Cell from "../../Cell";

const RowEleven = () => {
  const elements = [
    <div key={"p-11-1"} />,
    <div key={"p-11-2"} />,
    <div key={"p-11-3"} />,
    <div key={"p-11-4"} />,
    <div key={"p-11-5"} />,
    <Cell
      key={"p-11-6"}
      cellNumber={31}
      clues={[{ clueNumber: 4, clueDirection: "d" }]}
    />,
    <div key={"p-11-7"} />,
    <div key={"p-11-8"} />,
    <div key={"p-11-9"} />,
    <div key={"p-11-10"} />,
    <div key={"p-11-11"} />,
    <Cell
      key={"p-11-12"}
      cellNumber={102}
      clueIndex={11}
      clues={[{ clueNumber: 11, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-11-13"}
      cellNumber={103}
      clues={[{ clueNumber: 11, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-11-14"}
      cellNumber={104}
      clues={[{ clueNumber: 11, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-11-15"}
      cellNumber={105}
      clues={[{ clueNumber: 11, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-11-16"}
      cellNumber={106}
      clues={[{ clueNumber: 11, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-11-17"}
      cellNumber={107}
      clues={[
        { clueNumber: 8, clueDirection: "d" },
        { clueNumber: 11, clueDirection: "a" },
      ]}
    />,
    <Cell
      key={"p-11-18"}
      cellNumber={108}
      clues={[{ clueNumber: 11, clueDirection: "a" }]}
    />,
    <div key={"p-11-19"} />,
    <div key={"p-11-20"} />,
    <div key={"p-11-21"} />,
    <Cell
      key={"p-11-22"}
      cellNumber={129}
      clues={[{ clueNumber: 9, clueDirection: "d" }]}
    />,
  ];

  return elements;
};

export default RowEleven;
