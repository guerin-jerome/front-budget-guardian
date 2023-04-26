import { useMemo } from "react";
import { MOCK_BUDGETS } from "../mocks/budget.mock";
import { calculateTotalRemaining } from "@/common/budget.utils";
import { TBudget } from "@/interfaces/TBudget";

export const useExpenseTracking = () => {
  const budgets: TBudget[] = MOCK_BUDGETS;

  const totalRemaining: string = useMemo(
    () => calculateTotalRemaining(budgets),
    [budgets]
  );

  return { budgets, totalRemaining };
};
