import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ViewExpenseTracking } from "../ViewExpenseTracking";
import { EXPENSE_TRACKING_TITLE } from "../expenseTracking.label";

describe("<ViewCurrentBudget />", () => {
  it("matchs snapshot", () => {
    const { container } = render(<ViewExpenseTracking />);
    expect(container).toMatchSnapshot();
  });

  it("renders well", () => {
    render(<ViewExpenseTracking />);
    const expenseTrackingTitle = screen.getByRole("heading", {
      name: EXPENSE_TRACKING_TITLE,
    });
    const totalRemainingText = screen.getByText("Total restant : 219,4 €");
    expect(expenseTrackingTitle).toBeDefined();
    expect(totalRemainingText).toBeDefined();
  });
});
