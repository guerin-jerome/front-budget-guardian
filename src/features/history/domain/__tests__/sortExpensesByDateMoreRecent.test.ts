import { expect, describe, test } from "vitest";
import { sortExpensesByDateMoreRecent } from "../sortExpensesByDateMoreRecent";
import {
  MOCK_EXPENSE,
  MOCK_EXPENSES,
  MOCK_EXPENSE_COURSES,
} from "@/mocks/expense";

describe("sortExpensesByDateMoreRecent()", () => {
  test("changement of order", () => {
    const sortedExpenses = sortExpensesByDateMoreRecent(MOCK_EXPENSES);

    expect(sortedExpenses[0].date).toBe("2023-02-06");
    expect(sortedExpenses[1].date).toBe("2023-02-05");
    expect(sortedExpenses[2].date).toBe("1999-01-18");
  });

  test("no changement of order", () => {
    const sortedExpenses = sortExpensesByDateMoreRecent([
      MOCK_EXPENSE_COURSES,
      MOCK_EXPENSE,
    ]);

    expect(sortedExpenses[0].details).toBe("Courses de la semaine");
  });
});
