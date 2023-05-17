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
              : Number((budget.remaining!! - expense.amount).toFixed(2)),
          base:
            budget.type === BudgetType.SAVED
              ? Number((budget.base - expense.amount).toFixed(2))
              : budget.base,
        }
      : budget
  );
