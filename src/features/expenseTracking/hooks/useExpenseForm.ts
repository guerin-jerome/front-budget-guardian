import { MOCK_BUDGETS } from "@/mocks/budget";
import { buildBudgetsImpactedOptions } from "../domain/buildBudgetsImpactedOptions";

export const useExpenseForm = () => {
  const budgets = MOCK_BUDGETS;

  const budgetsImpactedOptions = buildBudgetsImpactedOptions(budgets);

  return { budgetsImpactedOptions };
};
