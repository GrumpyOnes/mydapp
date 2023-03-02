/* eslint-disable react/no-array-index-key */
import React, { useCallback, useState, useReducer } from "react";
import { Button } from "antd";
import solveSudoku from "./sudoku";
import "./style.css";
import "./style.less";

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
  const [data, dispatch] = useReducer(
    (state: number, action: number) => state + action,
    6
  );

  const solve = useCallback(() => {
    dispatch(4);
    setMyBoard([...solveSudoku(board)]);
  }, [setMyBoard, dispatch]);
  return (
    <div>
      <Button onClick={solve}>Answer！！</Button>
      {data}
      {myBoard.map((itmarr: string[], idxarr: number) => (
        <div className="card" key={`row${idxarr}`}>
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
