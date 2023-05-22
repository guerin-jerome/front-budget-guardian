import { Budget } from "@/entities/Budget";
import {
  buildLibelleCurrentValue,
  calculateBudgetConsumedPercentage,
  isBudgetReminingCloseToZero,
} from "../domain";
import { buildLibelleTypeBudget } from "@/common/utils/budget";

export const useCurrentBudget = (budget: Budget) => {
  const { type } = budget;

  const libelleCurrentValue = buildLibelleCurrentValue(budget);
  const libelleType = buildLibelleTypeBudget(type);
  const percentConsummed = calculateBudgetConsumedPercentage(budget);
  const isCloseToZero = isBudgetReminingCloseToZero(budget);

  return { libelleCurrentValue, libelleType, percentConsummed, isCloseToZero };
};
