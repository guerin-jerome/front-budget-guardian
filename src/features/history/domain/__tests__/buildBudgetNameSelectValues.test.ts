import { expect, describe, test } from "vitest";
import { buildBudgetNameSelectValues } from "../buildBudgetNameSelectValues";
import {
  MOCK_EXPENSE,
  MOCK_EXPENSES,
  MOCK_EXPENSE_SAVED,
} from "@/mocks/expense";

describe("buildBudgetNameSelectValues()", () => {
  test("cas nominal", () => {
    const expenses = [MOCK_EXPENSE, MOCK_EXPENSE_SAVED];
    expect(buildBudgetNameSelectValues(expenses)).toEqual([
      { text: "Loisirs", value: "1" },
      { text: "Placement financier", value: "2" },
    ]);
  });

  test("with empty array", () => {
    expect(buildBudgetNameSelectValues([])).toEqual([]);
  });

  test("with multiple expense with same budget impacted", () => {
    expect(
      buildBudgetNameSelectValues([...MOCK_EXPENSES, MOCK_EXPENSE_SAVED])
    ).toEqual([
      { text: "Loisirs", value: "1" },
      { text: "Courses", value: "4" },
      { text: "Placement financier", value: "2" },
    ]);
  });
});
