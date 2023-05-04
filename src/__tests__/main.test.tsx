import { Router } from "@/routes/Router";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import userEvent from "@testing-library/user-event";

test("Application integration tests", async () => {
  render(<Router />);
  /**
   * Location : Product page
   */
  expect(window.location.pathname).toEqual("/");

  // Get button to go on home expense tracking
  const button = screen.getByRole("button");
  await userEvent.click(button);

  /**
   * Location : Home - Expense tracking
   */
  expect(window.location.pathname).toEqual("/home/expense-tracking");
});
