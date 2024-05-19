import React from "react";
import Cell from "../../cell/Cell";

const RowEighteen = () => {
  const elements = [
    <div key={"p-18-1"} />,
    <div key={"p-18-2"} />,
    <div key={"p-18-3"} />,
    <Cell
      key={"p-18-4"}
      cellNumber={45}
      clues={[{ clueNumber: 15, clueDirection: "d" }]}
    />,
    <div key={"p-18-5"} />,
    <div key={"p-18-6"} />,
    <div key={"p-18-7"} />,
    <div key={"p-18-8"} />,
    <div key={"p-18-9"} />,
    <Cell
      key={"p-18-10"}
      cellNumber={54}
      clues={[{ clueNumber: 16, clueDirection: "d" }]}
    />,
    <div key={"p-18-11"} />,
    <div key={"p-18-12"} />,
    <Cell
      key={"p-18-13"}
      cellNumber={84}
      clues={[{ clueNumber: 13, clueDirection: "d" }]}
    />,
    <div key={"p-18-14"} />,
    <Cell
      key={"p-18-15"}
      cellNumber={93}
      clues={[{ clueNumber: 14, clueDirection: "d" }]}
    />,
    <div key={"p-18-16"} />,
    <div key={"p-18-17"} />,
    <div key={"p-18-18"} />,
    <div key={"p-18-19"} />,
    <div key={"p-18-20"} />,
    <div key={"p-18-21"} />,
    <div key={"p-18-22"} />,
  ];

  return elements;
};

export default RowEighteen;
