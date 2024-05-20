import React from "react";
import Cell from "../../Cell";

const RowFive = () => {
  const elements = [
    <div key={"p-5-1"} />,
    <Cell
      key={"p-5-2"}
      cellNumber={3}
      clues={[{ clueNumber: 3, clueDirection: "d" }]}
    />,
    <div key={"p-5-3"} />,
    <div key={"p-5-4"} />,
    <div key={"p-5-5"} />,
    <Cell
      key={"p-5-6"}
      cellNumber={23}
      clues={[{ clueNumber: 4, clueDirection: "d" }]}
    />,
    <div key={"p-5-7"} />,
    <div key={"p-5-8"} />,
    <div key={"p-5-9"} />,
    <div key={"p-5-10"} />,
    <Cell
      key={"p-5-11"}
      cellNumber={96}
      clues={[{ clueNumber: 2, clueDirection: "d" }]}
    />,
    <div key={"p-5-12"} />,
    <div key={"p-5-13"} />,
    <div key={"p-5-14"} />,
    <div key={"p-5-15"} />,
    <div key={"p-5-16"} />,
    <div key={"p-5-17"} />,
    <div key={"p-5-18"} />,
    <div key={"p-5-19"} />,
    <div key={"p-5-20"} />,
    <div key={"p-5-21"} />,
    <div key={"p-5-22"} />,
  ];

  return elements;
};

export default RowFive;
