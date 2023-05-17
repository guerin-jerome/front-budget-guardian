import { Budget } from "@/entities/Budget";
import { calculateBudgetConsumedPercentage } from "./calculateBudgetConsumedPercentage";

/**
 * Indique si le montant restant du budget est proche de zéro,
 * à partir de 15% restant.
 * @param budgets
 * @returns {boolean}
 */
export const isBudgetReminingCloseToZero = (budget: Budget): boolean =>
  parseInt(calculateBudgetConsumedPercentage(budget).replace("%", "")) <= 15;
