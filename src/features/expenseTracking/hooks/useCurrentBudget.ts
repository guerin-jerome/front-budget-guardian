import { Budget } from "@/entities/Budget";
import {
  buildLibelleCurrentValue,
  buildLibelleTypeBudget,
  calculateBudgetConsumedPercentage,
} from "../domain";

export const useCurrentBudget = (budget: Budget) => {
  const libelleCurrentValue = buildLibelleCurrentValue(budget);
  const libelleType = buildLibelleTypeBudget(budget);
  const percentConsummed = calculateBudgetConsumedPercentage(budget);

  return { libelleCurrentValue, libelleType, percentConsummed };
};
