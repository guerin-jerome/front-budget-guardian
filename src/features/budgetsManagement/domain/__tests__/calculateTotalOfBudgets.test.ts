import { expect, describe, test } from "vitest";
import { SAVED_BUDGET, VARIABLE_BUDGET } from "@/mocks/budget";
import { calculateTotalOfBudgets } from "../calculateTotalOfBudgets";
import { Budget, BudgetType } from "@/entities/Budget";

describe("calculateTotalOfBudgets()", () => {
  test("without budget", () => {
    expect(calculateTotalOfBudgets([])).toEqual("0,00 €");
  });

  test("with saved budget", () => {
    expect(calculateTotalOfBudgets([SAVED_BUDGET])).toEqual("0,00 €");
  });

  test("with variable and saved budget", () => {
    expect(calculateTotalOfBudgets([VARIABLE_BUDGET, SAVED_BUDGET])).toEqual(
      "100,00 €"
    );
  });

  test("with decimal base", () => {
    const budget: Budget = {
      id: "1",
      type: BudgetType.FIXE,
      name: "With decimal remaining",
      base: 10.5,
      remaining: 90.5,
    };
    expect(calculateTotalOfBudgets([budget])).toEqual("10,50 €");
  });

  test("with decimal rounded", () => {
    const budget: Budget = {
      id: "1",
      type: BudgetType.FIXE,
      name: "With decimal remaining",
      base: 10.569,
      remaining: 90,
    };
    expect(calculateTotalOfBudgets([budget])).toEqual("10,57 €");
  });
});
