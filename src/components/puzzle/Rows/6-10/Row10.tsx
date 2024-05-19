import React from "react";
import Cell from "../../cell/Cell";

const RowTen = () => {
  const elements = [
    <div key={"p-10-1"} />,
    <div key={"p-10-2"} />,
    <div key={"p-10-3"} />,
    <div key={"p-10-4"} />,
    <div key={"p-10-5"} />,
    <Cell
      key={"p-10-6"}
      cellNumber={30}
      clues={[{ clueNumber: 4, clueDirection: "d" }]}
    />,
    <div key={"p-10-7"} />,
    <div key={"p-10-8"} />,
    <div key={"p-10-9"} />,
    <div key={"p-10-10"} />,
    <Cell
      key={"p-10-11"}
      cellNumber={101}
      clues={[{ clueNumber: 2, clueDirection: "d" }]}
    />,
    <div key={"p-10-12"} />,
    <div key={"p-10-13"} />,
    <div key={"p-10-14"} />,
    <div key={"p-10-15"} />,
    <div key={"p-10-16"} />,
    <Cell
      key={"p-10-17"}
      cellNumber={116}
      clues={[{ clueNumber: 8, clueDirection: "d" }]}
    />,
    <div key={"p-10-18"} />,
    <div key={"p-10-19"} />,
    <div key={"p-10-20"} />,
    <div key={"p-10-21"} />,
    <Cell
      key={"p-10-22"}
      cellNumber={128}
      clues={[{ clueNumber: 9, clueDirection: "d" }]}
    />,
  ];

  return elements;
};

export default RowTen;
