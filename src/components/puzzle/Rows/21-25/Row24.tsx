import React from "react";
import Cell from "../../Cell";

const RowTwentyFour = () => {
  const elements = [
    <div key={"p-24-1"} />,
    <div key={"p-24-2"} />,
    <div key={"p-24-3"} />,
    <div key={"p-24-4"} />,
    <div key={"p-24-5"} />,
    <div key={"p-24-6"} />,
    <div key={"p-24-7"} />,
    <div key={"p-24-8"} />,
    <div key={"p-24-9"} />,
    <div key={"p-24-10"} />,
    <div key={"p-24-11"} />,
    <Cell
      key={"p-24-12"}
      cellNumber={64}
      clues={[{ clueNumber: 17, clueDirection: "d" }]}
    />,
    <div key={"p-24-13"} />,
    <div key={"p-24-14"} />,
    <Cell
      key={"p-24-15"}
      cellNumber={73}
      clues={[{ clueNumber: 18, clueDirection: "d" }]}
    />,
    <div key={"p-24-16"} />,
    <div key={"p-24-17"} />,
    <div key={"p-24-18"} />,
    <div key={"p-24-19"} />,
    <div key={"p-24-20"} />,
    <div key={"p-24-21"} />,
    <div key={"p-24-22"} />,
  ];

  return elements;
};

export default RowTwentyFour;
