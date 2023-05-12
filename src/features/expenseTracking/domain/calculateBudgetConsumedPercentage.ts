import { calculatePercentageRounded } from "@/common/utils/number";
import { Budget, BudgetType } from "@/entities/Budget";

/**
 * Calcule le pourcentage consommé du budget ou rend 100% si c'est une épargne,
 * ceci est utilisé pour déterminer la width dans la progress bar.
 * @param budget
 * @returns {string}
 */
export const calculateBudgetConsumedPercentage = ({
  type,
  base,
  spending,
}: Budget): string =>
  type !== BudgetType.SAVED && !!spending
    ? `${calculatePercentageRounded(spending, base).toString()}%`
    : "100%";
