import { expect, describe, test } from "vitest";
import { removeExpenseToBudget } from "../removeExpenseToBudget";
import { BudgetType } from "@/entities/Budget";
import { MOCK_BUDGET, MOCK_BUDGET_SAVED } from "@/mocks/budget";
import { MOCK_EXPENSE, MOCK_EXPENSE_SAVED } from "@/mocks/expense";

describe("removeExpenseToBudget()", () => {
  test("with empty budgets - return same", () => {
    expect(removeExpenseToBudget(MOCK_EXPENSE, [])).toEqual([]);
  });

  test("with no budget finded - return same", () => {
    expect(
      removeExpenseToBudget(
        { ...MOCK_EXPENSE, budget: { ...MOCK_EXPENSE.budget, id: "AZERTY" } },
        [MOCK_BUDGET]
      )
    ).toEqual([MOCK_BUDGET]);
  });

  test("with saved budget - should remove in base", () => {
    expect(
      removeExpenseToBudget(MOCK_EXPENSE_SAVED, [MOCK_BUDGET_SAVED])
    ).toEqual([{ ...MOCK_BUDGET_SAVED, base: 100 }]);
  });

  test("cas nominal - should remove in remaining", () => {
    expect(removeExpenseToBudget(MOCK_EXPENSE, [MOCK_BUDGET])).toEqual([
      { ...MOCK_BUDGET, remaining: -88.8 },
    ]);
  });
});
