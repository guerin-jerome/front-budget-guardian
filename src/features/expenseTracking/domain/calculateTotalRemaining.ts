import { addition } from "@/common/utils/number";
import { replacePointByComma } from "@/common/utils/string";
import { Budget, BudgetType } from "@/entities/Budget";

/**
 * Calcule le montant total restant de tous les budgets en enlevant les dépenses
 * @param budgets
 * @returns {string}
 */
export const calculateTotalRemaining = (budgets: Budget[]): string => {
  const isPossibleToCalculate =
    budgets.filter(({ type }) => type !== BudgetType.SAVED).length > 0;

  const value = isPossibleToCalculate
    ? budgets
        .filter(({ type }) => type !== BudgetType.SAVED)
        .map(({ remaining }) => remaining!!)
        .reduce(addition)
        .toFixed(2)
        .toString() + " €"
    : undefined;

  return replacePointByComma(value) ?? "0,00 €";
};
