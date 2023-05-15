import { expect, describe, test } from "vitest";
import { BudgetType } from "@/entities/Budget";
import { isBudgetReminingCloseToZero } from "../isBudgetReminingCloseToZero";

describe("isBudgetReminingCloseToZero()", () => {
  const budgetTest = {
    id: "1",
    type: BudgetType.FIXE,
    name: "test",
    base: 100,
    remaining: 100,
  };

  test("with budget upside 15% remaining", () => {
    expect(isBudgetReminingCloseToZero(budgetTest)).toBeFalsy();
  });

  test("with budget under 15% remaining", () => {
    expect(
      isBudgetReminingCloseToZero({ ...budgetTest, remaining: 0 })
    ).toBeTruthy();
  });

  test("with budget equal 15% remaining", () => {
    expect(
      isBudgetReminingCloseToZero({ ...budgetTest, remaining: 15 })
    ).toBeTruthy();
  });
});
