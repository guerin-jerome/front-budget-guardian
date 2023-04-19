import { useMemo } from "react";
import { MOCK_BUDGETS } from "../mocks/budgets.mock";
import { TBudget } from "../interfaces/TBudget";
import { calculateTotalRemaining } from "../common/budget.utils";

export const useBudgetTracking = () => {
  const budgets: TBudget[] = MOCK_BUDGETS;

  const totalRemaining: string = useMemo(
    () => calculateTotalRemaining(budgets),
    [budgets]
  );

  return { budgets, totalRemaining };
};
