import React from "react";
import Cell from "../../Cell";

const RowSixteen = () => {
  const elements = [
    <div key={"p-16-1"} />,
    <div key={"p-16-2"} />,
    <div key={"p-16-3"} />,
    <Cell
      key={"p-16-4"}
      cellNumber={43}
      clues={[{ clueNumber: 15, clueDirection: "d" }]}
    />,
    <div key={"p-16-5"} />,
    <div key={"p-16-6"} />,
    <div key={"p-16-7"} />,
    <div key={"p-16-8"} />,
    <div key={"p-16-9"} />,
    <Cell
      key={"p-16-10"}
      cellNumber={52}
      clues={[{ clueNumber: 16, clueDirection: "d" }]}
    />,
    <div key={"p-16-11"} />,
    <div key={"p-16-12"} />,
    <Cell
      key={"p-16-13"}
      cellNumber={82}
      clues={[{ clueNumber: 13, clueDirection: "d" }]}
    />,
    <div key={"p-16-14"} />,
    <Cell
      key={"p-16-15"}
      cellNumber={91}
      clues={[{ clueNumber: 14, clueDirection: "d" }]}
    />,
    <div key={"p-16-16"} />,
    <Cell
      key={"p-16-17"}
      cellNumber={120}
      clues={[{ clueNumber: 8, clueDirection: "d" }]}
    />,
    <div key={"p-16-18"} />,
    <div key={"p-16-19"} />,
    <div key={"p-16-20"} />,
    <div key={"p-16-21"} />,
    <div key={"p-16-22"} />,
  ];

  return elements;
};

export default RowSixteen;
