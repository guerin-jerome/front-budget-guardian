import { MOCK_BUDGETS } from "@/mocks/budget";

export const useExpenseTracking = () => {
  const budgets = MOCK_BUDGETS;

  return { budgets };
};
