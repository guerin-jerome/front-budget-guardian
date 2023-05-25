import { expect, describe, test } from "vitest";
import { updateCurrentExpenses } from "../updateCurrentExpenses";
import { MOCK_EXPENSE, MOCK_EXPENSE_SAVED } from "@/mocks/expense";
import { OrderValue } from "../../hooks/useHeaderHistory";
import { BudgetType } from "@/entities/Budget";

describe("updateCurrentExpenses()", () => {
  const expenses = [MOCK_EXPENSE_SAVED, MOCK_EXPENSE];

  test("cas nominal - no changement", () => {
    expect(
      updateCurrentExpenses(expenses, "initial_value", OrderValue.MORE_RECENT)
    ).toEqual(expenses);
  });

  test("need changement - more recent", () => {
    const expensesNotSorted = [MOCK_EXPENSE, MOCK_EXPENSE_SAVED];
    expect(
      updateCurrentExpenses(
        expensesNotSorted,
        "initial_value",
        OrderValue.MORE_RECENT
      )
    ).toEqual(expenses);
  });

  test("need changement - more older", () => {
    const expensesSorted = [MOCK_EXPENSE, MOCK_EXPENSE_SAVED];
    expect(
      updateCurrentExpenses(expenses, "initial_value", OrderValue.MORE_OLDER)
    ).toEqual(expensesSorted);
  });

  test("need changement - filter by budget type", () => {
    expect(
      updateCurrentExpenses(expenses, BudgetType.SAVED, OrderValue.MORE_RECENT)
    ).toEqual([MOCK_EXPENSE_SAVED]);
  });

  test("need changement - filter by budget type and sorted by date more recent", () => {
    const expensesToFilterAndSorted = [
      ...expenses,
      { ...MOCK_EXPENSE, date: "2022-01-18" },
    ];
    expect(
      updateCurrentExpenses(
        expensesToFilterAndSorted,
        BudgetType.VARIABLE,
        OrderValue.MORE_RECENT
      )
    ).toEqual([{ ...MOCK_EXPENSE, date: "2022-01-18" }, MOCK_EXPENSE]);
  });
});