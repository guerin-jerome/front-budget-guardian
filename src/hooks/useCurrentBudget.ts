import { useMemo } from "react";
import {
  calculateBudgetConsumedPercentage,
  getLibelleCurrentValue,
} from "../common/budget.utils";
import { TBudget } from "../interfaces/TBudget";

export const useCurrentBudget = (budget: TBudget) => {
  const libelleCurrentValue: string = useMemo(
    () => getLibelleCurrentValue(budget),
    [budget]
  );

  const percentConsummed = useMemo(
    () => calculateBudgetConsumedPercentage(budget),
    [budget]
  );

  return { libelleCurrentValue, percentConsummed };
};
