import { test, describe, expect } from "vitest";
import { renderWithAllProviders } from "@/common/utils/test";
import { History } from "../History";
import { screen } from "@testing-library/react";
import {
  BUDGET_IMPACTED_SELECT_LABEL,
  BUDGET_TYPE_SELECT_LABEL,
  DETAILS_INPUT_LABEL,
  EMPTY_EXPENSE_TEXT,
  SORT_ORDER_BUDGET_DATE_LABEL,
} from "../label";
import userEvent from "@testing-library/user-event";

describe("<History />", () => {
  test("vue initiale", () => {
    renderWithAllProviders(<History />);

    const detailsInput = screen.getByRole("textbox", {
      name: DETAILS_INPUT_LABEL,
    });
    const budgetImpactedSelect = screen.getByRole("combobox", {
      name: BUDGET_IMPACTED_SELECT_LABEL,
    });
    const budgetTypeSelect = screen.getByRole("combobox", {
      name: BUDGET_TYPE_SELECT_LABEL,
    });
    const sortOrderBudgetDateSelect = screen.getByRole("combobox", {
      name: SORT_ORDER_BUDGET_DATE_LABEL,
    });
    const resetButton = screen.getByRole("button");

    expect(detailsInput).toBeDefined();
    expect(budgetImpactedSelect).toBeDefined();
    expect(budgetTypeSelect).toBeDefined();
    expect(sortOrderBudgetDateSelect).toBeDefined();
    expect(resetButton).toBeDefined();

    const amountExpense = screen.getByText(/125,00€/i);
    const detailsExpense = screen.getByText(/courses de la semaine/i);
    const dateExpense = screen.getByText(/dimanche 5 février 2023/i);

    expect(amountExpense).toBeDefined();
    expect(detailsExpense).toBeDefined();
    expect(dateExpense).toBeDefined();
  });

  test("reset expenses", async () => {
    renderWithAllProviders(<History />);

    const amountExpense = screen.getByText(/125,00€/i);
    const detailsExpense = screen.getByText(/courses de la semaine/i);
    const dateExpense = screen.getByText(/dimanche 5 février 2023/i);

    expect(amountExpense).toBeDefined();
    expect(detailsExpense).toBeDefined();
    expect(dateExpense).toBeDefined();

    const resetButton = screen.getByRole("button");
    expect(resetButton).toBeDefined();

    await userEvent.click(resetButton);

    expect(screen.queryByText(/125,00€/i)).toBeNull();
    expect(screen.queryByText(/courses de la semaine/i)).toBeNull();
    expect(screen.queryByText(/dimanche 5 février 2023/i)).toBeNull();

    const emptyExpenseText = screen.getByText(EMPTY_EXPENSE_TEXT);
    expect(emptyExpenseText).toBeDefined();
  });
});
