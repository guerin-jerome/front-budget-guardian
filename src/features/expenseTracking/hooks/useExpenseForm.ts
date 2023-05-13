import { MOCK_BUDGETS } from "@/mocks/budget";
import { buildBudgetsImpactedOptions } from "../domain/buildBudgetsImpactedOptions";
import { MobileContext } from "@/context/MobileContext";
import { useContext } from "react";
import { buildSubmitTextButtons } from "../domain/buildSubmitTextButtons";

export const useExpenseForm = () => {
  const budgets = MOCK_BUDGETS;
  const isMobileDevice = useContext(MobileContext);

  const budgetsImpactedOptions = buildBudgetsImpactedOptions(budgets);
  const SubmitTextButtons = buildSubmitTextButtons(isMobileDevice);

  return { budgetsImpactedOptions, SubmitTextButtons, isMobileDevice };
};
