import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import { ExpenseTracking } from "../ExpenseTracking";
import { EXPENSE_TRACKING_TITLE } from "../label";

test("<ExpenseTracking />", () => {
  render(<ExpenseTracking />);

  const title = screen.getByRole("heading", { name: EXPENSE_TRACKING_TITLE });
  const subtitle = screen.getByText(/total restant : 219,40 €/i);

  expect(title).toBeDefined();
  expect(subtitle).toBeDefined();
});
