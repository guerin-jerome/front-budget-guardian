import { screen } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import { ExpenseForm } from "../expenseForm/ExpenseForm";
import { renderWithAllProviders } from "@/common/utils/test";
import { FormType } from "../../hooks/useExpenseTracking";
import {
  EXPENSE_AMOUNT_LABEL,
  EXPENSE_BUDGET_IMPACTED_LABEL,
  EXPENSE_DETAILS_LABEL,
} from "../label";

test("<ExpenseForm />", async () => {
  const setDisplayedForm = vi.fn();

  renderWithAllProviders(
    <ExpenseForm formType={FormType.ADD} setDisplayedForm={setDisplayedForm} />
  );

  const detailsLabel = screen.getByText(EXPENSE_DETAILS_LABEL);
  const detailsInput = screen.getByRole("textbox");
  expect(detailsLabel).toBeDefined();
  expect(detailsInput).toBeDefined();

  const budgetImpactedLabel = screen.getByText(EXPENSE_BUDGET_IMPACTED_LABEL);
  const budgetImpactedCombobox = screen.getByRole("combobox");
  expect(budgetImpactedLabel).toBeDefined();
  expect(budgetImpactedCombobox).toBeDefined();

  const dateLabel = screen.getByText(EXPENSE_DETAILS_LABEL);
  const dateInput = screen.getByTestId("date-input-expense");
  expect(dateLabel).toBeDefined();
  expect(dateInput).toBeDefined();

  const amountLabel = screen.getByText(EXPENSE_AMOUNT_LABEL);
  const amountInput = screen.getByRole("spinbutton");
  expect(amountLabel).toBeDefined();
  expect(amountInput).toBeDefined();

  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toEqual(2);
});
