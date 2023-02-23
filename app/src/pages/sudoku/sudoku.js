/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
const getArr = (type, val, board) => {
  if (type === "row") {
    return [...board[val]];
  }
  if (type === "col") {
    const _arr = [];
    board.forEach((itm, idx) => {
      _arr.push(itm[val]);
    });
    return _arr;
  }
  const _row = Math.floor(val / 3) * 3; // 当前盒子第一个最小格子在第几行
  const _col = (val % 3) * 3; // 当前盒子第一个最小格子在第几列
  const _arr = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      _arr.push(board[_row + i][_col + j]);
    }
  }
  return _arr;
};
const getLocation = (x, y) => ({
  row: x,
  col: y,
  box: Math.floor(x / 3) * 3 + Math.floor(y / 3),
});
const getAnd = (arr1, arr2, arr3) =>
  Array.from(new Set([...arr1, ...arr2, ...arr3]));

const getDiff = (stat, arr) => stat.filter((itm, idx) => !arr.includes(itm));

const getAblitiesNumber = (x, y, board) => {
  if (board[x][y] !== ".") {
    return board[x][y];
  }
  const _standerd = new Array(9).fill("").map((itm, idx) => itm + (idx + 1));
  const { row, col, box } = getLocation(x, y);

  /* 找出_standerd和三个维度的数组的差集 */

  const _andArr = getAnd(
    getArr("row", row, board),
    getArr("col", col, board),
    getArr("box", box, board)
  );
  return getDiff(_standerd, _andArr);
  // const arr1 = getDiff(_standerd,getArr('row',row,board));
  // const arr2 = getDiff(arr1,getArr('col',col,board));
  // const arr3 = getDiff(arr2,getArr('box',box,board));
  // return arr3;
};

const solveSudoku = (board) => {
  function backtracking() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        // eslint-disable-next-line no-continue
        if (board[i][j] !== ".") continue;
        const ij = getAblitiesNumber(i, j, board); // ij Arr处可能得数字
        if (ij.length > 0) {
          // eslint-disable-next-line no-restricted-syntax
          for (const val of ij) {
            board[i][j] = val;
            if (backtracking()) {
              return true;
            }
            board[i][j] = ".";
          }
        }
        return false;
      }
    }
    return true;
  }

  backtracking();
  return board;
};

export default solveSudoku;
