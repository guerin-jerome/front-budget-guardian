import { Expense } from "@/entities/Expense";

/**
 * Filtre les dépenses en entrée par l'id du budget donné.
 * @param expenses
 * @returns {Expense[]}
 */
export const filterExpenseByBudgetId = (
  expenses: Expense[],
  budgetId: string
): Expense[] =>
  budgetId === "initial_value"
    ? expenses
    : expenses.filter((expense) => expense.budget.id === budgetId);
