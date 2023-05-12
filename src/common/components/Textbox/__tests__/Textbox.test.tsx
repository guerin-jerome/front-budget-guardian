import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Textbox } from "../Textbox";
import userEvent from "@testing-library/user-event";

describe("<Textbox />", () => {
  const onChange = vi.fn();
  it("matchs snapshot", () => {
    const { container } = render(
      <Textbox onChange={onChange} id="test" name="test" />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders well - type number", async () => {
    render(
      <Textbox
        onChange={onChange}
        id="test"
        name="test"
        type="number"
        step={2}
        placeholder="Ex: 100"
      />
    );

    const textbox = screen.getByRole("spinbutton");

    await userEvent.type(textbox, "100");

    expect(onChange).toHaveBeenCalled();
    expect(textbox).toBeDefined();
  });
});
