import React from "react";
import Cell from "../../Cell";

const RowTwelve = () => {
  const elements = [
    <Cell
      key={"p-12-1"}
      cellNumber={35}
      clueIndex={12}
      clues={[{ clueNumber: 12, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-12-2"}
      cellNumber={36}
      clues={[{ clueNumber: 12, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-12-3"}
      cellNumber={37}
      clues={[{ clueNumber: 12, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-12-4"}
      cellNumber={38}
      clues={[{ clueNumber: 12, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-12-5"}
      cellNumber={39}
      clues={[{ clueNumber: 12, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-12-6"}
      cellNumber={32}
      clues={[
        { clueNumber: 4, clueDirection: "d" },
        { clueNumber: 12, clueDirection: "a" },
      ]}
    />,
    <Cell
      key={"p-12-7"}
      cellNumber={40}
      clues={[{ clueNumber: 12, clueDirection: "a" }]}
    />,
    <div key={"p-12-8"} />,
    <div key={"p-12-9"} />,
    <div key={"p-12-10"} />,
    <div key={"p-12-11"} />,
    <div key={"p-12-12"} />,
    <div key={"p-12-13"} />,
    <div key={"p-12-14"} />,
    <div key={"p-12-15"} />,
    <div key={"p-12-16"} />,
    <Cell
      key={"p-12-17"}
      cellNumber={117}
      clues={[{ clueNumber: 8, clueDirection: "d" }]}
    />,
    <div key={"p-12-18"} />,
    <div key={"p-12-19"} />,
    <div key={"p-12-20"} />,
    <div key={"p-12-21"} />,
    <div key={"p-12-22"} />,
  ];

  return elements;
};

export default RowTwelve;
