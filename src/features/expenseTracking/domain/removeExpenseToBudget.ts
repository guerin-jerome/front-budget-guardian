import { Budget, BudgetType } from "@/entities/Budget";
import { Expense } from "@/entities/Expense";

/**
 * Concatène les dépenses actuelles avec la nouvelle.
 * @param expense
 * @param budgets
 * @returns {Budget[]}
 */
export const removeExpenseToBudget = (
  expense: Expense,
  budgets: Budget[]
): Budget[] =>
  budgets.map((budget) =>
    budget.id === expense.budget.id
      ? {
          ...budget,
          remaining:
            budget.type === BudgetType.SAVED
              ? budget.remaining
              : budget.remaining!! - expense.amount,
          base:
            budget.type === BudgetType.SAVED
              ? budget.base - expense.amount
              : budget.base,
        }
      : budget
  );
