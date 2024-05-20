import React from "react";
import Cell from "../../Cell";

const RowSeven = () => {
  const elements = [
    <div key={"p-7-1"} />,
    <Cell
      key={"p-7-2"}
      cellNumber={5}
      clues={[{ clueNumber: 3, clueDirection: "d" }]}
    />,
    <div key={"p-7-3"} />,
    <div key={"p-7-4"} />,
    <div key={"p-7-5"} />,
    <Cell
      key={"p-7-6"}
      cellNumber={27}
      clues={[{ clueNumber: 4, clueDirection: "d" }]}
    />,
    <div key={"p-7-7"} />,
    <div key={"p-7-8"} />,
    <div key={"p-7-9"} />,
    <div key={"p-7-10"} />,
    <Cell
      key={"p-7-11"}
      cellNumber={98}
      clues={[{ clueNumber: 2, clueDirection: "d" }]}
    />,
    <div key={"p-7-12"} />,
    <Cell
      key={"p-7-13"}
      cellNumber={109}
      clueIndex={7}
      clues={[{ clueNumber: 7, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-7-14"}
      cellNumber={110}
      clues={[{ clueNumber: 7, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-7-15"}
      cellNumber={111}
      clues={[{ clueNumber: 7, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-7-16"}
      cellNumber={112}
      clues={[{ clueNumber: 7, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-7-17"}
      cellNumber={113}
      clueIndex={8}
      clues={[
        { clueNumber: 7, clueDirection: "a" },
        { clueNumber: 8, clueDirection: "d" },
      ]}
    />,
    <div key={"p-7-18"} />,
    <div key={"p-7-19"} />,
    <div key={"p-7-20"} />,
    <div key={"p-7-21"} />,
    <Cell
      key={"p-7-22"}
      cellNumber={125}
      clueIndex={9}
      clues={[{ clueNumber: 9, clueDirection: "d" }]}
    />,
  ];

  return elements;
};

export default RowSeven;
