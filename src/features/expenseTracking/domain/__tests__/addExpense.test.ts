import { expect, describe, test } from "vitest";
import { MOCK_EXPENSE, MOCK_EXPENSE_COURSES } from "@/mocks/expense";
import { addExpense } from "../addExpense";

describe("addExpense()", () => {
  test("with empty expenses", () => {
    expect(addExpense(MOCK_EXPENSE, [])).toEqual([MOCK_EXPENSE]);
  });

  test("with filled expenses", () => {
    expect(
      addExpense({ ...MOCK_EXPENSE, id: "2" }, [MOCK_EXPENSE_COURSES])
    ).toEqual([MOCK_EXPENSE_COURSES, { ...MOCK_EXPENSE, id: "2" }]);
  });
});
