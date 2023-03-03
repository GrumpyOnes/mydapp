import React from "react";
import { screen, render, cleanup, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Wordle from "./index";

describe("Test wordle", () => {
  afterEach(cleanup);
  test("初次渲染", () => {
    const result = render(<Wordle />);
    const inputs = result.container.getElementsByTagName("input");
    expect(inputs.length).toBe(6);
  });
  test("渲染 并输入值", () => {
    const result = render(<Wordle />);
    const inputs = result.container.getElementsByTagName("input");
    act(() => {
      userEvent.type(inputs[0], "a");
      userEvent.type(inputs[1], "b");
      userEvent.type(inputs[2], "c");
      userEvent.type(inputs[3], "d");
      userEvent.type(inputs[4], "e");
      userEvent.type(inputs[5], "f");
    });
    const inputs2 = result.container.getElementsByTagName("input");
    expect(inputs2.length).toBe(12);
  });
});
