import React from "react";
import Cell from "../../cell/Cell";

const RowFour = () => {
  const elements = [
    <div key={"p-4-1"} />,
    <Cell
      key={"p-4-2"}
      cellNumber={2}
      clues={[
        { clueNumber: 3, clueDirection: "d" },
        { clueNumber: 5, clueDirection: "a" },
      ]}
      clueIndex={5}
    />,
    <Cell
      key={"p-4-3"}
      cellNumber={6}
      clues={[{ clueNumber: 5, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-4-4"}
      cellNumber={7}
      clues={[{ clueNumber: 5, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-4-5"}
      cellNumber={8}
      clues={[{ clueNumber: 5, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-4-6"}
      cellNumber={10}
      clues={[
        { clueNumber: 4, clueDirection: "d" },
        { clueNumber: 5, clueDirection: "a" },
      ]}
    />,
    <Cell
      key={"p-4-7"}
      cellNumber={11}
      clues={[{ clueNumber: 5, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-4-8"}
      cellNumber={12}
      clues={[{ clueNumber: 5, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-4-9"}
      cellNumber={16}
      clues={[
        { clueNumber: 1, clueDirection: "d" },
        { clueNumber: 5, clueDirection: "a" },
      ]}
    />,
    <Cell
      key={"p-4-10"}
      cellNumber={17}
      clues={[{ clueNumber: 5, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-4-11"}
      cellNumber={21}
      clues={[
        { clueNumber: 2, clueDirection: "d" },
        { clueNumber: 5, clueDirection: "a" },
      ]}
    />,
    <Cell
      key={"p-4-12"}
      cellNumber={22}
      clues={[{ clueNumber: 5, clueDirection: "a" }]}
    />,
    <div key={"p-4-13"} />,
    <div key={"p-4-14"} />,
    <div key={"p-4-15"} />,
    <div key={"p-4-16"} />,
    <div key={"p-4-17"} />,
    <div key={"p-4-18"} />,
    <div key={"p-4-19"} />,
    <div key={"p-4-20"} />,
    <div key={"p-4-21"} />,
    <div key={"p-4-22"} />,
  ];

  return elements;
};

export default RowFour;
