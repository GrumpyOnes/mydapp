/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import {
  render,
  screen,
  cleanup,
  fireEvent,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Wrap from "./wrap";

const add = (a: number, b: number) => a + b;

jest.mock("./getAlgors", () => ({
  algos: {
    testalgos: {
      title: "取得最小值",
      desc: "",
      funcs: [{ func: add, name: "取得最小值%%%" }],
    },
  },
  names: ["testalgos"],
}));
jest.mock("react-router-dom", () => ({
  useParams: () => ({ name: "testalgos" }),
}));
describe("Test Wrap Components", () => {
  afterEach(cleanup);
  beforeAll(() => {
    //报错补丁
    Object.defineProperty(window, "matchMedia", {
      value: () => ({
        matches: false,
        addListener: () => {},
        removeListener: () => {},
      }),
    });
  });

  test("显示出正确的文字", async () => {
    render(<Wrap />);
    const docu = screen.getByText(/取得最小值/);
    expect(docu).toBeInTheDocument();
  });
  test("输入数字并click button", async () => {
    render(<Wrap />);
    const input = screen.getByRole("textbox");
    await act(async () => {
      await userEvent.type(input, "1,2");
      await userEvent.click(screen.getByText("Submit"));
    });
    const result = screen.getByText(/结果为 3/);
    expect(result).toBeInTheDocument();
  });
});
