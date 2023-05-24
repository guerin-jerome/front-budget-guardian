import { Budget } from "@/entities/Budget";
import {
  buildLibelleCurrentValue,
  buildLibelleTypeBudget,
  calculateBudgetConsumedPercentage,
  isBudgetReminingCloseToZero,
} from "../domain";

export const useCurrentBudget = (budget: Budget) => {
  const libelleCurrentValue = buildLibelleCurrentValue(budget);
  const libelleType = buildLibelleTypeBudget(budget);
  const percentConsummed = calculateBudgetConsumedPercentage(budget);
  const isCloseToZero = isBudgetReminingCloseToZero(budget);

  return { libelleCurrentValue, libelleType, percentConsummed, isCloseToZero };
};
