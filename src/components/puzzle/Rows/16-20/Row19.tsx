import React from "react";
import Cell from "../../cell/Cell";

const RowNineteen = () => {
  const elements = [
    <div key={"p-19-1"} />,
    <div key={"p-19-2"} />,
    <div key={"p-19-3"} />,
    <div key={"p-19-4"} />,
    <div key={"p-19-5"} />,
    <div key={"p-19-6"} />,
    <div key={"p-19-7"} />,
    <div key={"p-19-8"} />,
    <div key={"p-19-9"} />,
    <Cell
      key={"p-19-10"}
      cellNumber={55}
      clues={[{ clueNumber: 16, clueDirection: "d" }]}
    />,
    <div key={"p-19-11"} />,
    <div key={"p-19-12"} />,
    <Cell
      key={"p-19-13"}
      cellNumber={85}
      clues={[{ clueNumber: 13, clueDirection: "d" }]}
    />,
    <div key={"p-19-14"} />,
    <div key={"p-19-15"} />,
    <div key={"p-19-16"} />,
    <div key={"p-19-17"} />,
    <div key={"p-19-18"} />,
    <div key={"p-19-19"} />,
    <div key={"p-19-20"} />,
    <div key={"p-19-21"} />,
    <div key={"p-19-22"} />,
  ];

  return elements;
};

export default RowNineteen;
