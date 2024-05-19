import React from "react";
import Cell from "../../cell/Cell";

const RowTwentySix = () => {
  const elements = [
    <div key={"p-26-1"} />,
    <div key={"p-26-2"} />,
    <div key={"p-26-3"} />,
    <div key={"p-26-4"} />,
    <div key={"p-26-5"} />,
    <div key={"p-26-6"} />,
    <div key={"p-26-7"} />,
    <div key={"p-26-8"} />,
    <div key={"p-26-9"} />,
    <div key={"p-26-10"} />,
    <div key={"p-26-11"} />,
    <Cell
      key={"p-26-12"}
      cellNumber={66}
      clues={[{ clueNumber: 17, clueDirection: "d" }]}
    />,
    <div key={"p-26-13"} />,
    <div key={"p-26-14"} />,
    <div key={"p-26-15"} />,
    <div key={"p-26-16"} />,
    <div key={"p-26-17"} />,
    <div key={"p-26-18"} />,
    <div key={"p-26-19"} />,
    <div key={"p-26-20"} />,
    <div key={"p-26-21"} />,
    <div key={"p-26-22"} />,
  ];

  return elements;
};

export default RowTwentySix;
