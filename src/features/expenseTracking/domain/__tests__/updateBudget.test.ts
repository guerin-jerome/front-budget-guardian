import { expect, describe, test } from "vitest";
import { MOCK_BUDGET, MOCK_BUDGET_SAVED } from "@/mocks/budget";
import { updateBudget } from "../updateBudget";
import {
  MOCK_EXPENSE,
  MOCK_EXPENSE_SAVED,
  MOCK_REMOVE_EXPENSE,
  MOCK_REMOVE_EXPENSE_SAVED,
} from "@/mocks/expense";
import { BudgetType } from "@/entities/Budget";

describe("updateBudget()", () => {
  test("with empty budgets - return same", () => {
    expect(updateBudget(MOCK_EXPENSE, [])).toEqual([]);
  });

  test("with no budget finded - return same", () => {
    expect(
      updateBudget(
        { ...MOCK_EXPENSE, budget: { ...MOCK_EXPENSE.budget, id: "AZERTY" } },
        [MOCK_BUDGET]
      )
    ).toEqual([MOCK_BUDGET]);
  });

  test("with saved budget - should remove in remaining", () => {
    expect(updateBudget(MOCK_REMOVE_EXPENSE, [MOCK_BUDGET])).toEqual([
      {
        id: "1",
        name: "Loisirs",
        type: BudgetType.VARIABLE,
        remaining: -4.4,
        base: 100,
      },
    ]);
  });

  test("cas nominal - should remove in base", () => {
    expect(
      updateBudget(MOCK_REMOVE_EXPENSE_SAVED, [MOCK_BUDGET_SAVED])
    ).toEqual([
      {
        id: "2",
        name: "Placement financier",
        type: BudgetType.SAVED,
        base: 100,
      },
    ]);
  });

  test("cas nominal - should add in remaining", () => {
    expect(updateBudget(MOCK_EXPENSE, [MOCK_BUDGET])).toEqual([
      {
        id: "1",
        name: "Loisirs",
        type: BudgetType.VARIABLE,
        remaining: 100,
        base: 100,
      },
    ]);
  });

  test("with saved budget - should add in base", () => {
    expect(updateBudget(MOCK_EXPENSE_SAVED, [MOCK_BUDGET_SAVED])).toEqual([
      {
        id: "2",
        name: "Placement financier",
        type: BudgetType.SAVED,
        base: 300,
      },
    ]);
  });
});
