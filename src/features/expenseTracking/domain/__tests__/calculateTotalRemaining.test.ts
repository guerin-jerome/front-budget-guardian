import { expect, describe, test } from "vitest";
import { SAVED_BUDGET, VARIABLE_BUDGET } from "@/mocks/budget";
import { calculateTotalRemaining } from "../calculateTotalRemaining";
import { Budget, BudgetType } from "@/entities/Budget";

describe("calculateTotalRemaining()", () => {
  test("without budget", () => {
    expect(calculateTotalRemaining([])).toEqual("0,00 €");
  });

  test("with saved budget", () => {
    expect(calculateTotalRemaining([SAVED_BUDGET])).toEqual("0,00 €");
  });

  test("with variable and saved budget", () => {
    expect(calculateTotalRemaining([VARIABLE_BUDGET, SAVED_BUDGET])).toEqual(
      "5,00 €"
    );
  });

  test("with negative remaining", () => {
    const budget: Budget = {
      id: "1",
      type: BudgetType.FIXE,
      name: "With negative remaining",
      base: 100,
      remaining: -100,
    };
    expect(calculateTotalRemaining([budget, { ...budget, id: "2" }])).toEqual(
      "-200,00 €"
    );
  });

  test("with decimal remaining", () => {
    const budget: Budget = {
      id: "1",
      type: BudgetType.FIXE,
      name: "With decimal remaining",
      base: 100,
      remaining: 90.5,
    };
    expect(calculateTotalRemaining([budget])).toEqual("90,50 €");
  });

  test("with decimal remaining", () => {
    const budget: Budget = {
      id: "1",
      type: BudgetType.FIXE,
      name: "With decimal remaining",
      base: 100,
      remaining: 90.589,
    };
    expect(calculateTotalRemaining([budget])).toEqual("90,59 €");
  });
});
