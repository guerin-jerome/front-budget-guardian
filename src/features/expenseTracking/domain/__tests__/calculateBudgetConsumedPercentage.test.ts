import { expect, describe, test } from "vitest";
import { FIXE_BUDGET, SAVED_BUDGET, VARIABLE_BUDGET } from "@/mocks/budget";
import { calculateBudgetConsumedPercentage } from "../calculateBudgetConsumedPercentage";
import { Budget, BudgetType } from "@/entities/Budget";

describe("calculateBudgetConsumedPercentage()", () => {
  test("with saved budget", () => {
    expect(calculateBudgetConsumedPercentage(SAVED_BUDGET)).toEqual("100%");
  });

  test("with fixe budget", () => {
    expect(calculateBudgetConsumedPercentage(FIXE_BUDGET)).toEqual("100%");
  });

  test("with variable budget", () => {
    expect(calculateBudgetConsumedPercentage(VARIABLE_BUDGET)).toEqual("5%");
  });

  test("with negative balance", () => {
    const budget: Budget = {
      id: 1,
      type: BudgetType.FIXE,
      name: "With negative balance",
      base: -100,
      spending: 5,
    };
    expect(calculateBudgetConsumedPercentage(budget)).toEqual("0%");
  });

  test("with over balance", () => {
    const budget: Budget = {
      id: 1,
      type: BudgetType.FIXE,
      name: "With over balance",
      base: 100,
      spending: 150,
    };
    expect(calculateBudgetConsumedPercentage(budget)).toEqual("100%");
  });
});
