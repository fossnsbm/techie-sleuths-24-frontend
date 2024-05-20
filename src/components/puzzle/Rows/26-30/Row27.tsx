import React from "react";
import Cell from "../../Cell";

const RowTwentySeven = () => {
  const elements = [
    <div key={"p-27-1"} />,
    <div key={"p-27-2"} />,
    <div key={"p-27-3"} />,
    <div key={"p-27-4"} />,
    <div key={"p-27-5"} />,
    <div key={"p-27-6"} />,
    <div key={"p-27-7"} />,
    <div key={"p-27-8"} />,
    <div key={"p-27-9"} />,
    <div key={"p-27-10"} />,
    <div key={"p-27-11"} />,
    <Cell
      key={"p-27-12"}
      cellNumber={67}
      clues={[{ clueNumber: 17, clueDirection: "d" }]}
    />,
    <div key={"p-27-13"} />,
    <div key={"p-27-14"} />,
    <div key={"p-27-15"} />,
    <div key={"p-27-16"} />,
    <div key={"p-27-17"} />,
    <div key={"p-27-18"} />,
    <div key={"p-27-19"} />,
    <div key={"p-27-20"} />,
    <div key={"p-27-21"} />,
    <div key={"p-27-22"} />,
  ];

  return elements;
};

export default RowTwentySeven;
