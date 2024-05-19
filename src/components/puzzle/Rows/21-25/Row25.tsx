import React from "react";
import Cell from "../../cell/Cell";

const RowTwentyFive = () => {
  const elements = [
    <div key={"p-25-1"} />,
    <div key={"p-25-2"} />,
    <div key={"p-25-3"} />,
    <div key={"p-25-4"} />,
    <div key={"p-25-5"} />,
    <div key={"p-25-6"} />,
    <div key={"p-25-7"} />,
    <div key={"p-25-8"} />,
    <div key={"p-25-9"} />,
    <div key={"p-25-10"} />,
    <div key={"p-25-11"} />,
    <Cell
      key={"p-25-12"}
      cellNumber={65}
      clues={[{ clueNumber: 17, clueDirection: "d" }]}
    />,
    <div key={"p-25-13"} />,
    <div key={"p-25-14"} />,
    <Cell
      key={"p-25-15"}
      cellNumber={74}
      clues={[{ clueNumber: 18, clueDirection: "d" }]}
    />,
    <div key={"p-25-16"} />,
    <div key={"p-25-17"} />,
    <div key={"p-25-18"} />,
    <div key={"p-25-19"} />,
    <div key={"p-25-20"} />,
    <div key={"p-25-21"} />,
    <div key={"p-25-22"} />,
  ];

  return elements;
};

export default RowTwentyFive;
