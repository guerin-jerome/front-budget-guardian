import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Label } from "../Label";

describe("<Label />", () => {
  it("matchs snapshot", () => {
    const { container } = render(<Label htmlFor="test">Hello</Label>);
    expect(container).toMatchSnapshot();
  });

  it("renders well", () => {
    render(<Label htmlFor="test">Hello</Label>);
    const labelText = screen.getByText("Hello");
    expect(labelText).toBeDefined();
  });
});
