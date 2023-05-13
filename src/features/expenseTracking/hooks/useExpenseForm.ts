import { MOCK_BUDGETS } from "@/mocks/budget";
import { MobileContext } from "@/context/MobileContext";
import { useContext } from "react";
import { buildSubmitTextButtons } from "../domain";
import { buildBudgetsImpactedOptions } from "../domain";

export const useExpenseForm = () => {
  const budgets = MOCK_BUDGETS;
  const isMobileDevice = useContext(MobileContext);

  const budgetsImpactedOptions = buildBudgetsImpactedOptions(budgets);
  const SubmitTextButtons = buildSubmitTextButtons(isMobileDevice);

  return { budgetsImpactedOptions, SubmitTextButtons, isMobileDevice };
};
