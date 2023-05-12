import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Select } from "../Select";
import userEvent from "@testing-library/user-event";

describe("<Select />", () => {
  const onChange = vi.fn();
  it("matchs snapshot", () => {
    const { container } = render(
      <Select id="test" name="test" options={[]} onChange={onChange} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders well", async () => {
    render(
      <Select
        id="test"
        name="test"
        options={[{ value: "1", text: "optionTest", disabled: true }]}
        onChange={onChange}
      />
    );

    const select = screen.getByRole("combobox");

    expect(select).toBeDefined();
  });
});
