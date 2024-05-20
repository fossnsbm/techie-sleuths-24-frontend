import React from "react";

import Cell from "../../Cell";

const RowFourteen = () => {
  const elements = [
    <div key={"p-14-1"} />,
    <div key={"p-14-2"} />,
    <div key={"p-14-3"} />,
    <Cell
      key={"p-14-4"}
      cellNumber={41}
      clueIndex={15}
      clues={[
        { clueNumber: 15, clueDirection: "a" },
        { clueNumber: 15, clueDirection: "d" },
      ]}
    />,
    <Cell
      key={"p-14-5"}
      cellNumber={46}
      clues={[{ clueNumber: 15, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-14-6"}
      cellNumber={34}
      clues={[
        { clueNumber: 4, clueDirection: "d" },
        { clueNumber: 15, clueDirection: "a" },
      ]}
    />,
    <Cell
      key={"p-14-7"}
      cellNumber={47}
      clues={[{ clueNumber: 15, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-14-8"}
      cellNumber={48}
      clues={[{ clueNumber: 15, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-14-9"}
      cellNumber={49}
      clues={[{ clueNumber: 15, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-14-10"}
      cellNumber={50}
      clueIndex={16}
      clues={[
        { clueNumber: 15, clueDirection: "a" },
        { clueNumber: 16, clueDirection: "d" },
      ]}
    />,
    <Cell
      key={"p-14-11"}
      cellNumber={77}
      clues={[{ clueNumber: 15, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-14-12"}
      cellNumber={78}
      clues={[{ clueNumber: 15, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-14-13"}
      cellNumber={80}
      clues={[
        { clueNumber: 13, clueDirection: "d" },
        { clueNumber: 15, clueDirection: "a" },
      ]}
    />,
    <Cell
      key={"p-14-14"}
      cellNumber={87}
      clues={[{ clueNumber: 15, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-14-15"}
      cellNumber={89}
      clues={[
        { clueNumber: 14, clueDirection: "d" },
        { clueNumber: 15, clueDirection: "a" },
      ]}
    />,
    <Cell
      key={"p-14-16"}
      cellNumber={94}
      clues={[{ clueNumber: 15, clueDirection: "a" }]}
    />,
    <Cell
      key={"p-14-17"}
      cellNumber={95}
      clues={[
        { clueNumber: 8, clueDirection: "d" },
        { clueNumber: 15, clueDirection: "a" },
      ]}
    />,
    <div key={"p-14-18"} />,
    <div key={"p-14-19"} />,
    <div key={"p-14-20"} />,
    <div key={"p-14-21"} />,
    <div key={"p-14-22"} />,
  ];

  return elements;
};

export default RowFourteen;
