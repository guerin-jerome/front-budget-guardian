import { MOCK_BUDGETS } from "@/mocks/budget";
import { calculateTotalRemaining } from "../domain";

export const useExpenseTracking = () => {
  const budgets = MOCK_BUDGETS;

  const totalRemaining = calculateTotalRemaining(budgets);

  return { budgets, totalRemaining };
};
