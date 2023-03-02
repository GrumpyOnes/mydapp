import React, { memo, Suspense, useEffect, useState } from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { Link, useLocation } from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";

const { Header } = Layout;

const navigator: MenuProps["items"] = [
  {
    label: "Navigation One",
    key: "/",
    icon: <MailOutlined />,
  },
  {
    label: "Navigation Two",
    key: "app",
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: (
      <div>
        <Link to="/game">GAME</Link>
      </div>
    ),
    key: "game",
  },
  {
    label: (
      <div>
        <Link to="/chain">CHAIN</Link>
      </div>
    ),
    key: "chain",
  },
  {
    label: (
      <div>
        <Link to="/algorithm">ALGORITHM</Link>
      </div>
    ),
    key: "algorithm",
  },
];

const Head: React.FC<any> = () => {
  const { pathname }: any = useLocation();
  const [selectedKey, setSelectKey] = useState<string>("game");
  useEffect(() => {
    //
    const pathKey = pathname.split("/")[1];
    setSelectKey(pathKey);
  }, [pathname, setSelectKey]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[selectedKey]}
        items={navigator}
      />
    </Header>
  );
};

export default Head;
