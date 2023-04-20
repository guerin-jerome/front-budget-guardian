import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card } from "../Card";

describe("<Card />", () => {
  it("matchs snapshot", () => {
    const { container } = render(<Card>Hello</Card>);
    expect(container).toMatchSnapshot();
  });

  it("renders well", () => {
    render(<Card>Hello</Card>);
    const cardText = screen.getByText("Hello");
    expect(cardText).toBeDefined();
  });
});
