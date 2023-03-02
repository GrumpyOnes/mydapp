import React, { memo, Suspense } from "react";

import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { Link } from "react-router-dom";
import { LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { algos, names } from "../algorithmwrap/getAlgors";

const { Content, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "algorithm",
    icon: React.createElement(LaptopOutlined),
    label: "ALGORITHM",
    children: names.map((itm: string) => ({
      key: itm,
      label: <Link to={`/algorithm/${itm}`}>{algos[itm].title}</Link>,
    })),
  },
];

const App: React.FC<any> = (router: RouteConfigComponentProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { route, match } = router;
  console.log("route", (match.params as any).name);

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
