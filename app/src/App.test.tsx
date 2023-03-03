import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

const Comp = () => <div>Comp</div>;
// eslint-disable-next-line react/display-name
jest.mock("./components/header", () => () => <div>mock header</div>);
jest.mock("./routes", () => [
  {
    path: "/",
    exact: true,
    component: Comp,
  },
]);
test("renders learn react link", () => {
  render(<App />);
  const element = screen.getByText(/Ant Design/i);
  expect(element).toBeInTheDocument();
});
