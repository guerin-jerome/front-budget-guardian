import { Budget, BudgetType } from "@/entities/Budget";
import { Expense } from "@/entities/Expense";

/**
 * Met à jour le budget courant en ajoutant ou retirant au budget restant ou à la base
 * de l'épargne.
 * @param expense
 * @param budgets
 * @returns {Budget[]}
 */
export const updateBudget = (expense: Expense, budgets: Budget[]): Budget[] =>
  budgets.map((budget) =>
    budget.id === expense.budget.id
      ? {
          ...budget,
          remaining:
            budget.type === BudgetType.SAVED
              ? budget.remaining
              : Number((budget.remaining!! + expense.amount).toFixed(2)),
          base:
            budget.type === BudgetType.SAVED
              ? Number((budget.base + expense.amount).toFixed(2))
              : budget.base,
        }
      : budget
  );
