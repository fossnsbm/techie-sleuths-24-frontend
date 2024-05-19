import React from "react";
import Cell from "../../cell/Cell";

const RowFifteen = () => {
  const elements = [
    <div key={"p-15-1"} />,
    <div key={"p-15-2"} />,
    <div key={"p-15-3"} />,
    <Cell
      key={"p-15-4"}
      cellNumber={42}
      clues={[{ clueNumber: 15, clueDirection: "d" }]}
    />,
    <div key={"p-15-5"} />,
    <div key={"p-15-6"} />,
    <div key={"p-15-7"} />,
    <div key={"p-15-8"} />,
    <div key={"p-15-9"} />,
    <Cell
      key={"p-15-10"}
      cellNumber={51}
      clues={[{ clueNumber: 16, clueDirection: "d" }]}
    />,
    <div key={"p-15-11"} />,
    <div key={"p-15-12"} />,
    <Cell
      key={"p-15-13"}
      cellNumber={81}
      clues={[{ clueNumber: 13, clueDirection: "d" }]}
    />,
    <div key={"p-15-14"} />,
    <Cell
      key={"p-15-15"}
      cellNumber={90}
      clues={[{ clueNumber: 14, clueDirection: "d" }]}
    />,
    <div key={"p-15-16"} />,
    <Cell
      key={"p-15-17"}
      cellNumber={119}
      clues={[{ clueNumber: 8, clueDirection: "d" }]}
    />,
    <div key={"p-15-18"} />,
    <div key={"p-15-19"} />,
    <div key={"p-15-20"} />,
    <div key={"p-15-21"} />,
    <div key={"p-15-22"} />,
  ];

  return elements;
};

export default RowFifteen;
