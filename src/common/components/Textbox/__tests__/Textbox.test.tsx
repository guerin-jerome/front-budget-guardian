import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Textbox } from "../Textbox";
import userEvent from "@testing-library/user-event";

describe("<Textbox />", () => {
  it("matchs snapshot", () => {
    const { container } = render(<Textbox />);
    expect(container).toMatchSnapshot();
  });

  it("renders well - type number", async () => {
    render(<Textbox type="number" step={2} placeholder="Ex: 100" />);
    const textbox = screen.getByRole("spinbutton");
    await userEvent.type(textbox, "100");
    expect(textbox).toBeDefined();
  });
});
