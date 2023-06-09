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
import { OrderValue } from "../../hooks/useHeaderHistory";
import { BudgetTypeLibelle } from "@/entities/Budget";

export const formExpensePresenceExpected = () => {
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
};

const courseExpensePresenceExpected = () => {
  const amountExpense = screen.getByText(/125,00€/i);
  const detailsExpense = screen.getByText(/courses de la semaine/i);
  const dateExpense = screen.getByText(/dimanche 5 février 2023/i);

  expect(amountExpense).toBeDefined();
  expect(detailsExpense).toBeDefined();
  expect(dateExpense).toBeDefined();
};

describe("<History />", () => {
  test("vue initiale", () => {
    renderWithAllProviders(<History />);

    formExpensePresenceExpected();
    courseExpensePresenceExpected();
  });

  test("reset expenses", async () => {
    renderWithAllProviders(<History />);

    courseExpensePresenceExpected();

    const resetButton = screen.getByRole("button");
    expect(resetButton).toBeDefined();

    await userEvent.click(resetButton);

    expect(screen.queryByText(/125,00€/i)).toBeNull();
    expect(screen.queryByText(/courses de la semaine/i)).toBeNull();
    expect(screen.queryByText(/dimanche 5 février 2023/i)).toBeNull();

    const emptyExpenseText = screen.getByText(EMPTY_EXPENSE_TEXT);
    expect(emptyExpenseText).toBeDefined();
  });

  test("filter by expense name, budget type and by budget name", async () => {
    renderWithAllProviders(<History />);

    expect(screen.queryByText("Besoin personnel")).toBeDefined();
    expect(screen.queryByText("Courses de la semaine")).toBeDefined();
    expect(screen.queryByText("Details loisirs")).toBeDefined();

    const expenseNameInput = screen.getByLabelText(DETAILS_INPUT_LABEL);

    await userEvent.type(expenseNameInput, "Deta");

    expect(screen.queryByText("Besoin personnel")).toBeNull();
    expect(screen.queryByText("Courses de la semaine")).toBeNull();
    expect(screen.queryByText("Details loisirs")).toBeDefined();

    await userEvent.clear(expenseNameInput);

    expect(screen.queryByText("Besoin personnel")).toBeDefined();
    expect(screen.queryByText("Courses de la semaine")).toBeDefined();
    expect(screen.queryByText("Details loisirs")).toBeDefined();

    const budgetTypeSelect = screen.getByRole("combobox", {
      name: BUDGET_TYPE_SELECT_LABEL,
    });

    await userEvent.selectOptions(budgetTypeSelect, BudgetTypeLibelle.VARIABLE);

    expect(screen.queryByText("Placement financier")).toBeNull();
    expect(screen.queryAllByText("Courses").length).toEqual(2);
    expect(screen.queryByText("Details loisirs")).toBeDefined();

    const budgetNameSelect = screen.getByRole("combobox", {
      name: BUDGET_IMPACTED_SELECT_LABEL,
    });

    await userEvent.selectOptions(budgetNameSelect, "Courses");

    expect(screen.queryByText("Placement financier")).toBeNull();
    expect(screen.queryByText("Details loisirs")).toBeNull();
    expect(screen.queryAllByText("Courses").length).toEqual(2);

    await userEvent.selectOptions(budgetTypeSelect, "Tous");
    await userEvent.selectOptions(budgetNameSelect, "Tous");

    expect(screen.queryByText("Details loisirs")).toBeDefined();
    expect(screen.queryAllByText("Placement financier").length).toEqual(2);
    expect(screen.queryAllByText("Courses").length).toEqual(2);
  });

  test("change order by date", async () => {
    renderWithAllProviders(<History />);

    const sortByDateSelect = screen.getByRole("combobox", {
      name: SORT_ORDER_BUDGET_DATE_LABEL,
    });

    await userEvent.selectOptions(sortByDateSelect, OrderValue.MORE_OLDER);
    await userEvent.selectOptions(sortByDateSelect, OrderValue.MORE_RECENT);
  });
});
