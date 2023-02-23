import React, { memo, Suspense } from "react";

import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { Link } from "react-router-dom";
import { LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Content, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "libergame",
    icon: React.createElement(LaptopOutlined),
    label: "文字类游戏",
    children: [
      {
        key: "wordle",
        label: <Link to="/game/wordle">WORDLE</Link>,
      },
      {
        key: "shudu",
        label: <Link to="/game/sudoku">SHUDU</Link>,
      },
    ],
  },
  {
    key: "picsgame",
    icon: <NotificationOutlined />,
    label: "图形类游戏",
    children: [
      {
        key: "pintu",
        label: <Link to="/game/pintu">PINTU</Link>,
      },
    ],
  },
];

const App: React.FC<any> = ({ route }: RouteConfigComponentProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout style={{ padding: "24px 0", background: colorBgContainer }}>
        <Sider style={{ background: colorBgContainer }} width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["libergame"]}
            style={{ height: "100%" }}
            items={items}
          />
        </Sider>
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          {renderRoutes(route?.routes)}
        </Content>
      </Layout>
    </Content>
  );
};

export default App;
