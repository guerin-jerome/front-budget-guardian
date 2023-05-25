import { Expense } from "@/entities/Expense";
import { BudgetTypeFilter } from "../hooks/useHeaderHistory";

/**
 * Filtre les dépenses en entrée par le type de budget donné.
 * @param expenses
 * @returns {Expense[]}
 */
export const filterExpenseByBudgetType = (
  expenses: Expense[],
  budgetType: BudgetTypeFilter
): Expense[] =>
  budgetType === "initial_value"
    ? expenses
    : expenses.filter((expense) => expense.budget.type === budgetType);
