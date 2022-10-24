import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("home copmponent test", () => {
  test("test for Home component", () => {
    render(<Home />);
    const textElement = screen.getByText("Art 2 Hearth");
    expect(textElement).toBeInTheDocument("Art 2 Hearth");
  });
  test("test for Home component", () => {
    render(<Home />);
    const textElement = screen.getByText("Art 2 Hearth");
    expect(textElement).not.toBeInTheDocument("Art 2 Hearth");
  });
});
