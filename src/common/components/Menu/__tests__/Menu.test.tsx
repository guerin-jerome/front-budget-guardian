import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Menu } from "../Menu";
import userEvent from "@testing-library/user-event";
import { MouseEvent } from "react";

describe("<Menu />", () => {
  const navigate = vi.fn((event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  });

  const initialItems = [
    { text: "Test", href: "/test", isActive: false, onClick: navigate },
  ];

  it("matchs snapshot", () => {
    const { container } = render(<Menu items={initialItems} />);
    expect(container).toMatchSnapshot();
  });

  it("renders well and should navigate", async () => {
    render(<Menu items={initialItems} />);

    const navLink = screen.getByRole("link", { name: /test/i });
    expect(navLink).toBeDefined();

    await userEvent.click(navLink);

    expect(navigate).toHaveBeenCalled();
  });
});
