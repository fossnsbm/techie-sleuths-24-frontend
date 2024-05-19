import React from "react";
import Cell from "../../cell/Cell";

const RowSeventeen = () => {
  const elements = [
    <div key={"p-17-1"} />,
    <div key={"p-17-2"} />,
    <div key={"p-17-3"} />,
    <Cell
      key={"p-17-4"}
      cellNumber={44}
      clues={[{ clueNumber: 15, clueDirection: "d" }]}
    />,
    <div key={"p-17-5"} />,
    <div key={"p-17-6"} />,
    <div key={"p-17-7"} />,
    <div key={"p-17-8"} />,
    <div key={"p-17-9"} />,
    <Cell
      key={"p-17-10"}
      cellNumber={53}
      clues={[{ clueNumber: 16, clueDirection: "d" }]}
    />,
    <div key={"p-17-11"} />,
    <div key={"p-17-12"} />,
    <Cell
      key={"p-17-13"}
      cellNumber={83}
      clues={[{ clueNumber: 13, clueDirection: "d" }]}
    />,
    <div key={"p-17-14"} />,
    <Cell
      key={"p-17-15"}
      cellNumber={92}
      clues={[{ clueNumber: 14, clueDirection: "d" }]}
    />,
    <div key={"p-17-16"} />,
    <div key={"p-17-17"} />,
    <div key={"p-17-18"} />,
    <div key={"p-17-19"} />,
    <div key={"p-17-20"} />,
    <div key={"p-17-21"} />,
    <div key={"p-17-22"} />,
  ];

  return elements;
};

export default RowSeventeen;
