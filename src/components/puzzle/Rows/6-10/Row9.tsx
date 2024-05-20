import React from "react";
import Cell from "../../Cell";

const RowNine = () => {
  const elements = [
    <div key={"p-9-1"} />,
    <div key={"p-9-2"} />,
    <div key={"p-9-3"} />,
    <div key={"p-9-4"} />,
    <div key={"p-9-5"} />,
    <Cell
      key={"p-9-6"}
      cellNumber={29}
      clues={[{ clueNumber: 4, clueDirection: "d" }]}
    />,
    <div key={"p-9-7"} />,
    <div key={"p-9-8"} />,
    <div key={"p-9-9"} />,
    <div key={"p-9-10"} />,
    <Cell
      key={"p-9-11"}
      cellNumber={100}
      clues={[{ clueNumber: 2, clueDirection: "d" }]}
    />,
    <div key={"p-9-12"} />,
    <div key={"p-9-13"} />,
    <div key={"p-9-14"} />,
    <div key={"p-9-15"} />,
    <div key={"p-9-16"} />,
    <Cell
      key={"p-9-17"}
      cellNumber={115}
      clueIndex={10}
      clues={[
        { clueNumber: 8, clueDirection: "d" },
        { clueNumber: 10, clueDirection: "a" },
      ]}
    />,
    <Cell
      key={"p-9-18"}
      cellNumber={121}
      clues={[{ clueNumber: 10, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-9-19"}
      cellNumber={122}
      clues={[{ clueNumber: 10, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-9-20"}
      cellNumber={123}
      clues={[{ clueNumber: 10, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-9-21"}
      cellNumber={124}
      clues={[{ clueNumber: 10, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-9-22"}
      cellNumber={127}
      clues={[
        { clueNumber: 9, clueDirection: "d" },
        { clueNumber: 10, clueDirection: "a" },
      ]}
    />,
  ];

  return elements;
};

export default RowNine;
