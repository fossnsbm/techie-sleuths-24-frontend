import React from "react";
import Cell from "../../Cell";

const RowTwentyTwo = () => {
  const elements = [
    <div key={"p-22-1"} />,
    <div key={"p-22-2"} />,
    <div key={"p-22-3"} />,
    <div key={"p-22-4"} />,
    <div key={"p-22-5"} />,
    <div key={"p-22-6"} />,
    <div key={"p-22-7"} />,
    <div key={"p-22-8"} />,
    <div key={"p-22-9"} />,
    <Cell
      key={"p-22-10"}
      cellNumber={58}
      clueIndex={19}
      clues={[
        { clueNumber: 16, clueDirection: "d" },
        { clueNumber: 19, clueDirection: "a" },
      ]}
    />,
    <Cell
      key={"p-22-11"}
      cellNumber={60}
      clues={[{ clueNumber: 19, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-22-12"}
      cellNumber={62}
      clues={[
        { clueNumber: 17, clueDirection: "d" },
        { clueNumber: 19, clueDirection: "a" },
      ]}
    />,
    <Cell
      key={"p-22-13"}
      cellNumber={68}
      clues={[{ clueNumber: 19, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-22-14"}
      cellNumber={69}
      clues={[{ clueNumber: 19, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-22-15"}
      cellNumber={71}
      clues={[
        { clueNumber: 18, clueDirection: "d" },
        { clueNumber: 19, clueDirection: "a" },
      ]}
    />,
    <Cell
      key={"p-22-16"}
      cellNumber={75}
      clues={[{ clueNumber: 19, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-22-17"}
      cellNumber={76}
      clues={[{ clueNumber: 19, clueDirection: "a" }]}
    />,
    <div key={"p-22-18"} />,
    <div key={"p-22-19"} />,
    <div key={"p-22-20"} />,
    <div key={"p-22-21"} />,
    <div key={"p-22-22"} />,
  ];

  return elements;
};

export default RowTwentyTwo;
