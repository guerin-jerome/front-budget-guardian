import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Select } from "../Select";

describe("<Select />", () => {
  it("matchs snapshot", () => {
    const { container } = render(<Select options={[]} />);
    expect(container).toMatchSnapshot();
  });

  it("renders well", async () => {
    render(
      <Select
        defaultValue="1"
        defaultText="Example"
        options={[{ value: "1", text: "optionTest", disabled: true }]}
      />
    );
    const select = screen.getByRole("combobox");
    const placeholerOption = screen.getByRole("option", { name: "Example" });
    const optionTest = screen.getByRole("option", { name: "optionTest" });

    expect(select).toBeDefined();
    expect(placeholerOption).toBeDefined();
    expect(optionTest).toBeDefined();
  });
});
