import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "../Button";
import { ButtonAppearence } from "../button.type";
import userEvent from "@testing-library/user-event";

describe("<Button />", () => {
  const onClick = vi.fn();

  it("matchs snapshot - cas nominal", () => {
    const { container } = render(<Button onClick={onClick}>Hello</Button>);
    expect(container).toMatchSnapshot();
  });

  it("renders well - secondary className iconMode", async () => {
    render(
      <Button
        onClick={onClick}
        isIconMode
        appearence={ButtonAppearence.SECONDARY}
        className="test"
      >
        Hello
      </Button>
    );

    const button = screen.getByRole("button", { name: "Hello" });

    await userEvent.click(button);

    expect(button).toBeDefined();
    expect(onClick).toHaveBeenCalled();
  });

  it("renders well - danger submit", async () => {
    render(
      <Button
        onClick={onClick}
        type="submit"
        appearence={ButtonAppearence.DANGER}
      >
        Hello
      </Button>
    );

    const button = screen.getByRole("button", { name: "Hello" });

    expect(button).toBeDefined();
  });

  it("renders well - success reset", async () => {
    render(
      <Button
        onClick={onClick}
        type="reset"
        appearence={ButtonAppearence.SUCCESS}
      >
        Hello
      </Button>
    );

    const button = screen.getByRole("button", { name: "Hello" });

    expect(button).toBeDefined();
  });
});
