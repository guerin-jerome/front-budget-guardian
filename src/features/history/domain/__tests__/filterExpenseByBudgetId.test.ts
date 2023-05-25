import { expect, describe, test } from "vitest";
import { filterExpenseByBudgetId } from "../filterExpenseByBudgetId";
import { MOCK_EXPENSE, MOCK_EXPENSE_SAVED } from "@/mocks/expense";

describe("filterExpenseByBudgetId()", () => {
  const expenses = [MOCK_EXPENSE, MOCK_EXPENSE_SAVED];

  test("cas nominal", () => {
    expect(filterExpenseByBudgetId(expenses, "1")).toEqual([MOCK_EXPENSE]);
  });

  test("with initial value", () => {
    expect(filterExpenseByBudgetId(expenses, "initial_value")).toEqual(
      expenses
    );
  });

  test("with empty array", () => {
    expect(filterExpenseByBudgetId([], "1")).toEqual([]);
  });

  test("with multiple expense with budget id selected", () => {
    expect(filterExpenseByBudgetId([...expenses, MOCK_EXPENSE], "1")).toEqual([
      MOCK_EXPENSE,
      MOCK_EXPENSE,
    ]);
  });
});
