import React, { memo, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import routes from "./routes";
import MyHeader from "./components/header";

import store from "./store";

const { Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Suspense fallback="">
      <Provider store={store}>
        <Router>
          <Layout>
            <MyHeader />
            {renderRoutes(routes)}
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2023 Created by Ant UED
            </Footer>
          </Layout>
        </Router>
      </Provider>
    </Suspense>
  );
};

export default App;
