import { expect, describe, test } from "vitest";
import { buildExpenseFromInputs } from "../buildExpenseFromInputs";
import { BudgetType } from "@/entities/Budget";
import { MOCK_BUDGETS } from "@/mocks/budget";

describe("buildExpenseFromInputs()", () => {
  test("cas nominal", () => {
    const inputs = {
      details: "details",
      date: "1999-01-18",
      budgetImpacted: "1",
      amount: "100",
    };
    const { budget, amount, details, date } = buildExpenseFromInputs(
      inputs,
      MOCK_BUDGETS
    );
    expect(budget).toEqual({
      id: "1",
      name: "Loisirs",
      type: BudgetType.VARIABLE,
    });
    expect(amount).toEqual(100);
    expect(details).toEqual("details");
    expect(date).toEqual("1999-01-18");
  });

  test("without details", () => {
    const inputs = {
      details: "",
      date: "1999-01-18",
      budgetImpacted: "1",
      amount: "100",
    };
    const { budget, amount, details, date } = buildExpenseFromInputs(
      inputs,
      MOCK_BUDGETS
    );
    expect(budget).toEqual({
      id: "1",
      name: "Loisirs",
      type: BudgetType.VARIABLE,
    });
    expect(amount).toEqual(100);
    expect(details).toBeUndefined();
    expect(date).toEqual("1999-01-18");
  });
});
