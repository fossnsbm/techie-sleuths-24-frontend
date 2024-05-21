import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "@/store";
import { setPuzzleDialog } from "@/store/reducers/puzzleDialog-reducer";
import { getCellCount } from "@/data/puzzle/ClueCellCount";

import { useSearchParams } from "next/navigation";

import {
  RowFive,
  RowFour,
  RowOne,
  RowThree,
  RowTwo,
} from "@/components/puzzle/Rows/1-5";
import {
  RowEight,
  RowNine,
  RowSeven,
  RowSix,
  RowTen,
} from "@/components/puzzle/Rows/6-10";


import {
  RowEleven,
  RowFifteen,
  RowFourteen,
  RowThirteen,
  RowTwelve,
} from "./11-15";
import {
  RowEighteen,
  RowNineteen,
  RowSeventeen,
  RowSixteen,
  RowTwenty,
} from "./16-20";
import {
  RowTwentyFive,
  RowTwentyFour,
  RowTwentyOne,
  RowTwentyThree,
  RowTwentyTwo,
} from "./21-25";
import { RowTwentySeven, RowTwentySix } from "./26-30";

type Props = {};

const Puzzle = (props: Props) => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const puzzleState: boolean = useSelector(
    (state: RootState) => state.puzzleDialog.isOpen,
  );
  useEffect(() => {
    let direction = searchParams.get("direction");
    direction = direction === "d" || direction === "a" ? direction : null;
    const number = parseInt(searchParams.get("number") || "", 10);
    if (direction && number && !puzzleState) {
      const cellCount = getCellCount(number, direction as "d" | "a");
      if (cellCount !== 0) {
        dispatch(
          setPuzzleDialog({
            isOpen: true,
            clues: [
              {
                clueNumber: number,
                clueDirection: direction as "d" | "a",
              },
            ],
          }),
        );
      }
    }
  }, []);
  return (
    <div className="overflow-x-scroll z-10" style={{ overflowY: "hidden" }}>
      <div style={{ minWidth: "max-content" }}>
        <div className="inline-grid grid-cols-22 gap-0">
          {/* row 1-5 start */}
          <RowOne />
          <RowTwo />
          <RowThree />
          <RowFour />
          <RowFive />
          {/* row 1-5 end */}
          {/* row 6-10 start */}
          <RowSix />
          <RowSeven />
          <RowEight />
          <RowNine />
          <RowTen />
          {/* row 6-10 end */}
          {/* row 11-15 start */}
          <RowEleven />
          <RowTwelve />
          <RowThirteen />
          <RowFourteen />
          <RowFifteen />
          {/* row 11-15 end */}
          {/* row 16-20 start */}
          <RowSixteen />
          <RowSeventeen />
          <RowEighteen />
          <RowNineteen />
          <RowTwenty />
          {/* row 16-20 end */}
          {/* row 21-25 start */}
          <RowTwentyOne />
          <RowTwentyTwo />
          <RowTwentyThree />
          <RowTwentyFour />
          <RowTwentyFive />
          {/* row 21-25 end */}
          {/* row 26-30 start */}
          <RowTwentySix />
          <RowTwentySeven />
          {/* row 26-30 end */}
        </div>
      </div>
    </div>
  );
};

export default Puzzle;
