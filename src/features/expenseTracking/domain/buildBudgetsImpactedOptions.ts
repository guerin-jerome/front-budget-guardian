import { SelectOption } from "@/common/components/Select/select.type";
import { Budget } from "@/entities/Budget";

export const SELECT_BUDGET_IMPACTED_PLACEHOLDER = {
  value: "initial_value",
  text: "Sélectionnez un budget",
  disabled: true,
};

/**
 * Convertit les valeurs de budgets en options pour un select
 * @param budgets
 * @returns {SelectOptions}
 */
export const buildBudgetsImpactedOptions = (
  budgets: Budget[]
): SelectOption[] => {
  const newBudgets = budgets.map(({ id, name }) => ({
    value: id.toString(),
    text: name,
  }));
  newBudgets.unshift(SELECT_BUDGET_IMPACTED_PLACEHOLDER);
  return newBudgets;
};
