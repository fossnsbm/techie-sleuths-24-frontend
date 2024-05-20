import React from "react";

import Cell from "../../Cell";

const RowTwo = () => {
  const elements = [
    <div key={"p-2-1"} />,
    <div key={"p-2-2"} />,
    <div key={"p-2-3"} />,
    <div key={"p-2-4"} />,
    <div key={"p-2-5"} />,
    <div key={"p-2-6"} />,
    <div key={"p-2-7"} />,
    <div key={"p-2-8"} />,
    <Cell
      key={"p-2-9"}
      cellNumber={14}
      clues={[{ clueNumber: 1, clueDirection: "d" }]}
    />,
    <div key={"p-2-10"} />,
    <Cell
      key={"p-2-11"}
      cellNumber={19}
      clues={[{ clueNumber: 2, clueDirection: "d" }]}
    />,
    <div key={"p-2-12"} />,
    <div key={"p-2-13"} />,
    <div key={"p-2-14"} />,
    <div key={"p-2-15"} />,
    <div key={"p-2-16"} />,
    <div key={"p-2-17"} />,
    <div key={"p-2-18"} />,
    <div key={"p-2-19"} />,
    <div key={"p-2-20"} />,
    <div key={"p-2-21"} />,
    <div key={"p-2-22"} />,
  ];

  return elements;
};

export default RowTwo;
