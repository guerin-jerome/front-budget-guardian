import { buildBudgetsImpactedOptions } from "../domain/buildBudgetsImpactedOptions";
import { MobileContext } from "@/context/MobileContext";
import { useContext } from "react";
import { buildSubmitTextButtons } from "../domain/buildSubmitTextButtons";
import { BudgetContext } from "@/context/BudgetsContext";

export const useExpenseForm = () => {
  const { budgets } = useContext(BudgetContext);
  const isMobileDevice = useContext(MobileContext);

  const budgetsImpactedOptions = buildBudgetsImpactedOptions(budgets);
  const submitTextButtons = buildSubmitTextButtons(isMobileDevice);

  return { budgetsImpactedOptions, submitTextButtons, isMobileDevice };
};
