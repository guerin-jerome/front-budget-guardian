import { expect, describe, test } from "vitest";
import { removeExpenseToBudget } from "../removeExpenseToBudget";
import { BudgetType } from "@/entities/Budget";
import { MOCK_BUDGET, MOCK_BUDGET_SAVED } from "@/mocks/budget";

describe("removeExpenseToBudget()", () => {
  const expense = {
    id: "1",
    budget: {
      id: "2",
      type: BudgetType.FIXE,
      name: "Test1",
    },
    amount: 100,
    date: "1999-01-18",
    details: "test1",
  };

  test("with empty budgets - return same", () => {
    expect(removeExpenseToBudget(expense, [])).toEqual([]);
  });

  test("with no budget finded - return same", () => {
    expect(removeExpenseToBudget(expense, [MOCK_BUDGET])).toEqual([
      MOCK_BUDGET,
    ]);
  });

  test("with saved budget - should remove in base", () => {
    expect(removeExpenseToBudget(expense, [MOCK_BUDGET_SAVED])).toEqual([
      { ...MOCK_BUDGET_SAVED, base: 100 },
    ]);
  });

  test("cas nominal - should remove in remaining", () => {
    expect(
      removeExpenseToBudget(expense, [
        {
          id: "2",
          type: BudgetType.FIXE,
          name: "Test1",
          base: 200,
          remaining: 200,
        },
      ])
    ).toEqual([
      {
        id: "2",
        type: BudgetType.FIXE,
        name: "Test1",
        base: 200,
        remaining: 100,
      },
    ]);
  });
});
