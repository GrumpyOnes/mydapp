import React from "react";
import { render, screen, act } from "@testing-library/react";
import Header from "./index";

jest.mock("react-router-dom", () => ({
  useLocation: () => ({ pathname: "/" }),
  Link: () => null,
}));
describe("Test Header component", () => {
  test("should has two link-role", async () => {
    render(<Header />);
    await act(async () => {
      const links = await screen.getAllByRole("link");
      expect(links.length).toBe(2);
    });
  });
});
