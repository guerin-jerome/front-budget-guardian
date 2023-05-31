import { expect, describe, test } from "vitest";
import { removeBudget } from "../removeBudget";
import {
  MOCK_BUDGET,
  MOCK_BUDGETS,
  MOCK_BUDGET_FULL_CONSUMMED,
  MOCK_BUDGET_SAVED,
} from "@/mocks/budget";

describe("removeBudget()", () => {
  test("should remove budget without budgets", () => {
    expect(removeBudget("uuid", [])).toEqual([]);
  });

  test("should remove budget with budget finded", () => {
    expect(removeBudget("4", MOCK_BUDGETS)).toEqual([
      MOCK_BUDGET,
      MOCK_BUDGET_SAVED,
      MOCK_BUDGET_FULL_CONSUMMED,
    ]);
  });

  test("should remove budget without budget finded", () => {
    expect(removeBudget("7", MOCK_BUDGETS)).toEqual(MOCK_BUDGETS);
  });
});
