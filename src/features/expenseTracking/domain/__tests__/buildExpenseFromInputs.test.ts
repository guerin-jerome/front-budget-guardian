import { expect, describe, test } from "vitest";
import { buildExpenseFromInputs } from "../buildExpenseFromInputs";
import { BudgetType } from "@/entities/Budget";

describe("buildExpenseFromInputs()", () => {
  const budgets = [
    {
      id: "1",
      type: BudgetType.FIXE,
      name: "Test1",
      base: 200,
      remaining: 200,
    },
    {
      id: "2",
      type: BudgetType.VARIABLE,
      name: "Test2",
      base: 350,
      remaining: 90,
    },
  ];

  test("cas nominal", () => {
    const inputs = {
      details: "details",
      date: "1999-01-18",
      budgetImpacted: "1",
      amount: "100",
    };
    const { budget, amount, details, date } = buildExpenseFromInputs(
      inputs,
      budgets
    );
    expect(budget).toEqual({
      id: "1",
      type: BudgetType.FIXE,
      name: "Test1",
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
      budgets
    );
    expect(budget).toEqual({
      id: "1",
      type: BudgetType.FIXE,
      name: "Test1",
    });
    expect(amount).toEqual(100);
    expect(details).toBeUndefined();
    expect(date).toEqual("1999-01-18");
  });
});
