import { screen } from "@testing-library/react";
import { test, expect } from "vitest";
import { ExpenseTracking } from "../ExpenseTracking";
import {
  ADD_EXPENSE_TITLE_SECTION,
  EXPENSE_AMOUNT_LABEL,
  EXPENSE_BUDGET_IMPACTED_LABEL,
  EXPENSE_DATE_LABEL,
  EXPENSE_DETAILS_LABEL,
  EXPENSES_TRACKING_TITLE,
  RESET_BUTTON_TEXT,
  TOTAL_REMAINING_TITLE_SECTION,
} from "../label";
import { renderWithAllProviders } from "@/common/utils/test";
import userEvent from "@testing-library/user-event";

test("<ExpenseTracking />", async () => {
  renderWithAllProviders(<ExpenseTracking />);

  const title = screen.getByRole("heading", { name: EXPENSES_TRACKING_TITLE });

  expect(title).toBeDefined();

  /**
   * Formulaire d'ajout d'une dépense
   */
  const addExpenseTitle = screen.getByRole("heading", {
    name: ADD_EXPENSE_TITLE_SECTION,
  });
  const detailsLabel = screen.getByText(EXPENSE_DETAILS_LABEL);
  const budgetImpactedLabel = screen.getByText(EXPENSE_BUDGET_IMPACTED_LABEL);
  const dateLabel = screen.getByText(EXPENSE_DATE_LABEL);
  const amountLabel = screen.getByText(EXPENSE_AMOUNT_LABEL);
  const actionsButton = screen.getAllByRole("button");

  expect(addExpenseTitle).toBeDefined();
  expect(detailsLabel).toBeDefined();
  expect(budgetImpactedLabel).toBeDefined();
  expect(dateLabel).toBeDefined();
  expect(amountLabel).toBeDefined();
  expect(actionsButton.length).toEqual(3);

  /**
   * Visuel des dépenses
   */
  const totalRemainingTitle = screen.getByText(TOTAL_REMAINING_TITLE_SECTION, {
    exact: false,
  });
  const totalRemaining = screen.getByText(/615,60 €/i);
  const budgetName = screen.getAllByText(/loisirs/i);
  const budgetType = screen.getAllByText(/dépense variable/i);
  const budgetCurrentValue = screen.getByText(/5.6€\/100€/i);

  expect(totalRemainingTitle).toBeDefined();
  expect(totalRemaining).toBeDefined();
  expect(budgetName).toBeDefined();
  expect(budgetType).toBeDefined();
  expect(budgetCurrentValue).toBeDefined();

  const resetButton = screen.getByRole("button", { name: RESET_BUTTON_TEXT });

  await userEvent.click(resetButton);

  const totalRemainingAfterReset = screen.getByText(/835,00 €/i);

  expect(totalRemainingAfterReset).toBeDefined();
});
