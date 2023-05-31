import { addition } from "@/common/utils/number";
import { replacePointByComma } from "@/common/utils/string";
import { Budget, BudgetType } from "@/entities/Budget";

/**
 * Calcule la somme des budgets pour afficher le total à l'utilisateur
 * @param budgets
 * @returns {string}
 */
export const calculateTotalOfBudgets = (budgets: Budget[]) => {
  const isPossibleToCalculate =
    budgets.filter(({ type }) => type !== BudgetType.SAVED).length > 0;

  const value = isPossibleToCalculate
    ? budgets
        .filter(({ type }) => type !== BudgetType.SAVED)
        .map(({ base }) => base)
        .reduce(addition)
        .toFixed(2)
        .toString() + " €"
    : undefined;

  return replacePointByComma(value) ?? "0,00 €";
};
