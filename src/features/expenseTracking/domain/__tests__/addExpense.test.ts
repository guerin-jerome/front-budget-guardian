import { expect, describe, test } from "vitest";
import { addExpense } from "../addExpense";
import { Expense } from "@/entities/Expense";
import { BudgetType } from "@/entities/Budget";

describe("addExpense()", () => {
  const expense: Expense = {
    id: "1",
    budget: {
      id: "1",
      type: BudgetType.FIXE,
      name: "Test1",
    },
    amount: 100,
    date: "1999-01-18",
    details: "test1",
  };
  test("with empty expenses", () => {
    expect(addExpense(expense, [])).toEqual([expense]);
  });

  test("with filled expenses", () => {
    expect(addExpense({ ...expense, id: "2" }, [expense])).toEqual([
      expense,
      { ...expense, id: "2" },
    ]);
  });
});
