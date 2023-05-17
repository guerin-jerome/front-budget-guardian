import { Budget, BudgetType } from "@/entities/Budget";

/**
 * Remet les dépenses des budgets variable et fixe à zéro.
 * @param budget
 * @returns {string}
 */
export const resetCurrentBudgets = (budgets: Budget[]): Budget[] =>
  budgets.map((budget) =>
    budget.type === BudgetType.SAVED
      ? budget
      : { ...budget, remaining: budget.base }
  );
