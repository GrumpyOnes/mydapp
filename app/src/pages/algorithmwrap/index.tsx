import React, { memo, Suspense, useEffect, useState } from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useHistory } from "react-router-dom";
import Wrap from "./wrap";

// const algos: any = {};
// const files = (require as any).context("../algorithms", false, /\.(ts|js)/);
// files.keys().forEach((key: any) => {
//   const _cleanKey = key.replace("./", "").replace(".tsx", "");
//   algos[_cleanKey] = files(key).default || files(key);
// });
const { Content, Sider } = Layout;

const App: React.FC<any> = (router: RouteConfigComponentProps) => {
  const history = useHistory();
  const { match }: any = router;
  const _key = (match.params as any).name.toLowerCase();
  // if (!algos[_key]) {
  //   history.push("/algorithm/stocktrading");
  // }
  // const Comp = algos[_key] || "";

  return (
    <Content style={{ padding: "0 50px" }}>
      <Wrap />
    </Content>
  );
};

export default App;
