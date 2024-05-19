import React from "react";
import Cell from "../../cell/Cell";

const RowThirteen = () => {
  const elements = [
    <div key={"p-13-1"} />,
    <div key={"p-13-2"} />,
    <div key={"p-13-3"} />,
    <div key={"p-13-4"} />,
    <div key={"p-13-5"} />,
    <Cell
      key={"p-13-6"}
      cellNumber={33}
      clues={[{ clueNumber: 4, clueDirection: "d" }]}
    />,
    <div key={"p-13-7"} />,
    <div key={"p-13-8"} />,
    <div key={"p-13-9"} />,
    <div key={"p-13-10"} />,
    <div key={"p-13-11"} />,
    <div key={"p-13-12"} />,
    <Cell
      key={"p-13-13"}
      cellNumber={79}
      clueIndex={13}
      clues={[{ clueNumber: 13, clueDirection: "d" }]}
    />,
    <div key={"p-13-14"} />,
    <Cell
      key={"p-13-15"}
      cellNumber={88}
      clueIndex={14}
      clues={[{ clueNumber: 14, clueDirection: "d" }]}
    />,
    <div key={"p-13-16"} />,
    <Cell
      key={"p-13-17"}
      cellNumber={118}
      clues={[{ clueNumber: 8, clueDirection: "d" }]}
    />,
    <div key={"p-13-18"} />,
    <div key={"p-13-19"} />,
    <div key={"p-13-20"} />,
    <div key={"p-13-21"} />,
    <div key={"p-13-22"} />,
  ];

  return elements;
};

export default RowThirteen;
