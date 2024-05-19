import React from "react";
import Cell from "../../cell/Cell";

const RowEight = () => {
  const elements = [
    <div key={"p-8-1"} />,
    <div key={"p-8-2"} />,
    <div key={"p-8-3"} />,
    <div key={"p-8-4"} />,
    <div key={"p-8-5"} />,
    <Cell
      key={"p-8-6"}
      cellNumber={28}
      clues={[{ clueNumber: 4, clueDirection: "d" }]}
    />,
    <div key={"p-8-7"} />,
    <div key={"p-8-8"} />,
    <div key={"p-8-9"} />,
    <div key={"p-8-10"} />,
    <Cell
      key={"p-8-11"}
      cellNumber={99}
      clues={[{ clueNumber: 2, clueDirection: "d" }]}
    />,
    <div key={"p-8-12"} />,
    <div key={"p-8-13"} />,
    <div key={"p-8-14"} />,
    <div key={"p-8-15"} />,
    <div key={"p-8-16"} />,
    <Cell
      key={"p-8-17"}
      cellNumber={114}
      clues={[{ clueNumber: 8, clueDirection: "d" }]}
    />,
    <div key={"p-8-18"} />,
    <div key={"p-8-19"} />,
    <div key={"p-8-20"} />,
    <div key={"p-8-21"} />,
    <Cell
      key={"p-8-22"}
      cellNumber={126}
      clues={[{ clueNumber: 9, clueDirection: "d" }]}
    />,
  ];

  return elements;
};

export default RowEight;
