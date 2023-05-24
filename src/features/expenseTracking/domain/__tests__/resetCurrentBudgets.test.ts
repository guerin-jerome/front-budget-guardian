import { expect, describe, test } from "vitest";
import { SAVED_BUDGET, VARIABLE_BUDGET } from "@/mocks/budget";
import { resetCurrentBudgets } from "../resetCurrentBudgets";

describe("resetCurrentBudgets()", () => {
  const budgetWithBaseEqualsRemaining = {
    ...VARIABLE_BUDGET,
    remaining: VARIABLE_BUDGET.base,
  };

  test("without budgets", () => {
    expect(resetCurrentBudgets([])).toEqual([]);
  });

  test("with one budget", () => {
    expect(resetCurrentBudgets([VARIABLE_BUDGET])).toEqual([
      budgetWithBaseEqualsRemaining,
    ]);
  });

  test("with variable budget and saved budget", () => {
    expect(resetCurrentBudgets([VARIABLE_BUDGET, SAVED_BUDGET])).toEqual([
      budgetWithBaseEqualsRemaining,
      SAVED_BUDGET,
    ]);
  });

  test("with variable budget and saved budget", () => {
    expect(
      resetCurrentBudgets([VARIABLE_BUDGET, budgetWithBaseEqualsRemaining])
    ).toEqual([budgetWithBaseEqualsRemaining, budgetWithBaseEqualsRemaining]);
  });
});
