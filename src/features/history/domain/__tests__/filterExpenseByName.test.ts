import { expect, describe, test } from "vitest";
import { filterExpenseByName } from "../filterExpenseByName";
import { MOCK_EXPENSE, MOCK_EXPENSE_SAVED } from "@/mocks/expense";

describe("filterExpenseByName()", () => {
  const expenses = [MOCK_EXPENSE, MOCK_EXPENSE_SAVED];

  test("cas nominal", () => {
    expect(filterExpenseByName(expenses, "Details loisirs")).toEqual([
      MOCK_EXPENSE,
    ]);
  });

  test("with start of word", () => {
    expect(filterExpenseByName(expenses, "Deta")).toEqual([MOCK_EXPENSE]);
  });

  test("with start of word on lowerCase", () => {
    expect(filterExpenseByName(expenses, "deta")).toEqual([MOCK_EXPENSE]);
  });

  test("with empty name", () => {
    expect(filterExpenseByName(expenses, "")).toEqual(expenses);
  });
});
