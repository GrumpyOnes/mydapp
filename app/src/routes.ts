import React from "react";

const ChainPage = React.lazy(() => import("./pages/chain"));
const WordlePage = React.lazy(() => import("./pages/wordle"));
const EtherPage = React.lazy(() => import("./pages/testEther"));
const GamesPage = React.lazy(() => import("./pages/games"));
const SudokuPage = React.lazy(() => import("./pages/sudoku"));
const Algorithm = React.lazy(() => import("./pages/algorithm"));
const AlgorithmWrap = React.lazy(() => import("./pages/algorithmwrap"));
const routes = [
  {
    path: "/",
    exact: true,
    component: ChainPage,
  },
  {
    path: "/game",
    component: GamesPage,
    routes: [
      {
        path: "/game/wordle",
        component: WordlePage,
      },
      {
        path: "/game/sudoku",
        component: SudokuPage,
      },
    ],
  },
  {
    path: "/chain",
    component: ChainPage,
    routes: [
      {
        path: "/chain/erc20",
        component: EtherPage,
      },
    ],
  },
  {
    path: "/algorithm",
    component: Algorithm,
    routes: [
      {
        path: "/algorithm/:name",
        component: AlgorithmWrap,
      },
    ],
  },
];
export default routes;
