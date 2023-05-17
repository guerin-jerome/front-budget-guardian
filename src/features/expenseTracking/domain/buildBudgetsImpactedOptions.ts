import { SelectOption } from "@/common/components/Select/select.type";
import { Budget } from "@/entities/Budget";

/**
 * Convertit les valeurs de budgets en options pour un select
 * @param budgets
 * @returns {SelectOptions}
 */
export const buildBudgetsImpactedOptions = (
  budgets: Budget[]
): SelectOption[] =>
  budgets.map(({ id, name }) => ({
    value: id.toString(),
    text: name,
  }));
