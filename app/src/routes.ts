import React from "react";

const ChainPage = React.lazy(() => import("./pages/chain"));
const WordlePage = React.lazy(() => import("./pages/wordle"));
const EtherPage = React.lazy(() => import("./pages/testEther"));
const GamesPage = React.lazy(() => import("./pages/games"));

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
    ],
  },
  {
    path: "/chain",
    component: ChainPage,
    routes: [
      {
        path: "/chain/etherpage",
        component: EtherPage,
      },
    ],
  },
];
export default routes;
