import { Expense } from "@/entities/Expense";

/**
 * Filtre les dépenses en entrée par le nom donné.
 * @param expenses
 * @returns {Expense[]}
 */
export const filterExpenseByName = (
  expenses: Expense[],
  expenseName: string
): Expense[] =>
  expenseName.trim() === ""
    ? expenses
    : expenses.filter((expense) =>
        expense.details?.toLowerCase().startsWith(expenseName.toLowerCase())
      );
