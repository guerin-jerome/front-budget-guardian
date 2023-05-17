import { screen, waitFor } from "@testing-library/react";
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

export const formFillingScenario = async (
  details?: string,
  budgetImpacted?: string,
  date?: string,
  amount?: string
) => {
  if (details) {
    const textboxDetails = screen.getByRole("textbox");
    await userEvent.type(textboxDetails, details);
    expect(textboxDetails).toBeDefined();
  }

  if (budgetImpacted) {
    const selectBudgetImpacted = screen.getByRole("combobox");
    await userEvent.selectOptions(selectBudgetImpacted, budgetImpacted);
    expect(selectBudgetImpacted).toBeDefined();
  }

  if (date) {
    const datepicker = screen.getByTestId("date-input-expense");
    await userEvent.clear(datepicker);
    await userEvent.type(datepicker, date);
    expect(datepicker).toBeDefined();
  }

  if (amount) {
    const textboxAmount = screen.getByRole("spinbutton");
    await userEvent.type(textboxAmount, amount);
    expect(textboxAmount).toBeDefined();
  }
};

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
  // Total avant reset
  const totalRemaining = await screen.findByText(/615,60 €/i);
  const budgetName = screen.getAllByText(/loisirs/i);
  const budgetType = screen.getAllByText(/dépense variable/i);
  const budgetCurrentValue = screen.getByText("5,60€ / 100,00€");

  expect(totalRemainingTitle).toBeDefined();
  expect(totalRemaining).toBeDefined();
  expect(budgetName).toBeDefined();
  expect(budgetType).toBeDefined();
  expect(budgetCurrentValue).toBeDefined();

  const resetButton = screen.getByRole("button", { name: RESET_BUTTON_TEXT });

  await userEvent.click(resetButton);

  // Total après reset
  const totalRemainingAfterReset = await screen.findByText(/835,00 €/i);
  expect(totalRemainingAfterReset).toBeDefined();

  // Budget loisir avant ajout de la dépense
  screen.logTestingPlaygroundURL();
  const budgetLoisirRemaining = screen.getByText(/100,00€ \/ 100,00€/i);
  expect(budgetLoisirRemaining).toBeDefined();

  const addExpenseButton = screen.getByRole("button", { name: "-" });
  expect(addExpenseButton).toBeDefined();

  await formFillingScenario("details", "Loisirs", "1999-01-18", "50");
  await waitFor(() => userEvent.click(addExpenseButton));

  // Budget loisir après ajout de la dépense
  const budgetLoisirRemainingUpdated = await screen.findByText(
    "50,00€ / 100,00€"
  );
  expect(budgetLoisirRemainingUpdated).toBeDefined();

  // Épargne avant retrait
  const savedRemaining = screen.getByText("200,00€");
  expect(savedRemaining).toBeDefined();

  await formFillingScenario(
    "details",
    "Placement financier",
    "1999-01-18",
    "125"
  );
  await waitFor(() => userEvent.click(addExpenseButton));

  // Épargne après retrait
  const savedRemainingUpdated = await screen.findByText(/75,00€/i);
  expect(savedRemainingUpdated).toBeDefined();

  const selectBudgetImpacted = screen.getByRole("combobox");
  const datepicker = screen.getByTestId("date-input-expense");
  const textboxAmount = screen.getByRole("spinbutton");

  await userEvent.selectOptions(selectBudgetImpacted, "Loisirs");
  await userEvent.clear(datepicker);
  await userEvent.clear(textboxAmount);
  await userEvent.click(addExpenseButton);

  // Budget loisir avant ajout de la dépense
  const budgetLoisirNotUpdated = screen.getByText("50,00€ / 100,00€");
  expect(budgetLoisirNotUpdated).toBeDefined();
});
