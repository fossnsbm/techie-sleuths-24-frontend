import React from "react";
import Cell from "../../cell/Cell";

const RowSix = () => {
  const elements = [
    <div key={"p-6-1"} />,
    <Cell
      key={"p-6-2"}
      cellNumber={4}
      clues={[{ clueNumber: 3, clueDirection: "d" }]}
    />,
    <div key={"p-6-3"} />,
    <div key={"p-6-4"} />,
    <div key={"p-6-5"} />,
    <Cell
      key={"p-6-6"}
      cellNumber={24}
      clues={[
        { clueNumber: 4, clueDirection: "d" },
        { clueNumber: 6, clueDirection: "a" },
      ]}
      clueIndex={6}
    />,
    <Cell
      key={"p-6-7"}
      cellNumber={25}
      clues={[{ clueNumber: 6, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-6-8"}
      cellNumber={26}
      clues={[{ clueNumber: 6, clueDirection: "a" }]}
    />,
    <div key={"p-6-9"} />,
    <div key={"p-6-10"} />,
    <Cell
      key={"p-6-11"}
      cellNumber={97}
      clues={[{ clueNumber: 2, clueDirection: "d" }]}
    />,
    <div key={"p-6-12"} />,
    <div key={"p-6-13"} />,
    <div key={"p-6-14"} />,
    <div key={"p-6-15"} />,
    <div key={"p-6-16"} />,
    <div key={"p-6-17"} />,
    <div key={"p-6-18"} />,
    <div key={"p-6-19"} />,
    <div key={"p-6-20"} />,
    <div key={"p-6-21"} />,
    <div key={"p-6-22"} />,
  ];

  return elements;
};

export default RowSix;
