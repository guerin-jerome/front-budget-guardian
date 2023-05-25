import { expect, describe, test } from "vitest";
import { filterExpenseByBudgetType } from "../filterExpenseByBudgetType";
import { MOCK_EXPENSE, MOCK_EXPENSE_SAVED } from "@/mocks/expense";
import { BudgetType } from "@/entities/Budget";

describe("filterExpenseByBudgetType()", () => {
  const expenses = [MOCK_EXPENSE, MOCK_EXPENSE_SAVED];

  test("cas nominal", () => {
    expect(filterExpenseByBudgetType(expenses, BudgetType.SAVED)).toEqual([
      MOCK_EXPENSE_SAVED,
    ]);
  });

  test("with initial value", () => {
    expect(filterExpenseByBudgetType(expenses, "initial_value")).toEqual(
      expenses
    );
  });

  test("with empty array", () => {
    expect(filterExpenseByBudgetType([], BudgetType.SAVED)).toEqual([]);
  });
});
