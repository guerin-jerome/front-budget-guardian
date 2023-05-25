import { expect, describe, test } from "vitest";
import { sortExpensesByDateMoreOlder } from "../sortExpensesByDateMoreOlder";
import {
  MOCK_EXPENSE,
  MOCK_EXPENSES,
  MOCK_EXPENSE_COURSES,
} from "@/mocks/expense";

describe("sortExpensesByDateMoreOlder()", () => {
  test("changement of order", () => {
    const sortedExpenses = sortExpensesByDateMoreOlder(MOCK_EXPENSES);

    expect(sortedExpenses[0].date).toBe("1999-01-18");
    expect(sortedExpenses[1].date).toBe("2023-02-05");
  });

  test("no changement of order", () => {
    const sortedExpenses = sortExpensesByDateMoreOlder([
      MOCK_EXPENSE_COURSES,
      MOCK_EXPENSE,
    ]);

    expect(sortedExpenses[1].details).toBe("Courses de la semaine");
  });
});
