import React from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";

const App: React.FC = () => {
  const a = 5;
  return <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
};
export default App;
