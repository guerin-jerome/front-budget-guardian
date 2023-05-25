import { expect, describe, test } from "vitest";
import { buildBudgetTypeSelectValues } from "../buildBudgetTypeSelectValues";
import { MOCK_EXPENSE, MOCK_EXPENSE_SAVED } from "@/mocks/expense";
import { BudgetType, BudgetTypeLibelle } from "@/entities/Budget";

describe("buildBudgetTypeSelectValues()", () => {
  test("cas nominal", () => {
    const expenses = [MOCK_EXPENSE, MOCK_EXPENSE_SAVED];
    expect(buildBudgetTypeSelectValues(expenses)).toEqual([
      { text: BudgetTypeLibelle.VARIABLE, value: BudgetType.VARIABLE },
      { text: BudgetTypeLibelle.SAVED, value: BudgetType.SAVED },
    ]);
  });

  test("with empty array", () => {
    expect(buildBudgetTypeSelectValues([])).toEqual([]);
  });

  test("with duplicated type", () => {
    const expenses = [
      MOCK_EXPENSE,
      MOCK_EXPENSE_SAVED,
      MOCK_EXPENSE,
      MOCK_EXPENSE,
    ];
    expect(buildBudgetTypeSelectValues(expenses)).toEqual([
      { text: BudgetTypeLibelle.VARIABLE, value: BudgetType.VARIABLE },
      { text: BudgetTypeLibelle.SAVED, value: BudgetType.SAVED },
    ]);
  });
});
