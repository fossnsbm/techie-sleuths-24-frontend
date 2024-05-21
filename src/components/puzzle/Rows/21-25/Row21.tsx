import React from "react";

import Cell from "../../Cell";

const RowTwentyOne = () => {
  const elements = [
    <div key={"p-21-1"} />,
    <div key={"p-21-2"} />,
    <div key={"p-21-3"} />,
    <div key={"p-21-4"} />,
    <div key={"p-21-5"} />,
    <div key={"p-21-6"} />,
    <div key={"p-21-7"} />,
    <div key={"p-21-8"} />,
    <div key={"p-21-9"} />,
    <Cell
      key={"p-21-10"}
      cellNumber={57}
      clues={[{ clueNumber: 16, clueDirection: "d" }]}
    />,
    <div key={"p-21-11"} />,
    <Cell
      key={"p-21-12"}
      cellNumber={61}
      clueIndex={17}
      clues={[{ clueNumber: 17, clueDirection: "d" }]}
    />,
    <div key={"p-21-13"} />,
    <div key={"p-21-14"} />,
    <Cell
      key={"p-21-15"}
      cellNumber={70}
      clueIndex={18}
      clues={[{ clueNumber: 18, clueDirection: "d" }]}
    />,
    <div key={"p-21-16"} />,
    <div key={"p-21-17"} />,
    <div key={"p-21-18"} />,
    <div key={"p-21-19"} />,
    <div key={"p-21-20"} />,
    <div key={"p-21-21"} />,
    <div key={"p-21-22"} />,
  ];

  return elements;
};

export default RowTwentyOne;
