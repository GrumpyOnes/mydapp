/* eslint-disable react/no-array-index-key */
import React, { useCallback, useState } from "react";
import { Button } from "antd";
import solveSudoku from "./sudoku";
import "./style.css";

const board: any = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

export default function index() {
  const [myBoard, setMyBoard] = useState<string[][]>(board);
  const solve = useCallback(() => {
    setMyBoard([...solveSudoku(board)]);
  }, [setMyBoard]);
  return (
    <div>
      <Button onClick={solve}>Answer！！</Button>
      {myBoard.map((itmarr: string[], idxarr: number) => (
        <div key={`row${idxarr}`}>
          {itmarr.map((itm: string, idx: number) => (
            <span className="box" key={`col${idxarr}${idx}`}>
              {itm}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
