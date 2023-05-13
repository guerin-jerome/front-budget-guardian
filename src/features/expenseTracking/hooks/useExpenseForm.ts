import { MOCK_BUDGETS } from "@/mocks/budget";
import { buildBudgetsImpactedOptions } from "../domain/buildBudgetsImpactedOptions";
import { MobileContext } from "@/context/MobileContext";
import { useContext } from "react";
import { buildSubmitLabelButtons } from "../domain/buildSubmitLabelButtons";

export const useExpenseForm = () => {
  const budgets = MOCK_BUDGETS;
  const isMobileDevice = useContext(MobileContext);

  const budgetsImpactedOptions = buildBudgetsImpactedOptions(budgets);
  const submitLabelButtons = buildSubmitLabelButtons(isMobileDevice);

  return { budgetsImpactedOptions, submitLabelButtons, isMobileDevice };
};
