import { calculateTotalRemaining, resetCurrentBudgets } from "../domain";
import { Dispatch, SetStateAction, useContext } from "react";
import { BudgetsContext } from "@/context/BudgetsContext";
import {
  DISPLAYED_FORM_ADD_EXPENSE,
  DISPLAYED_FORM_REMOVE_EXPENSE,
  DisplayedForm,
} from "./useExpenseTracking";

export const useHeaderCurrentBudget = (
  setDisplayedForm: Dispatch<SetStateAction<DisplayedForm>>
) => {
  const { budgets, setBudgets } = useContext(BudgetsContext);

  const totalRemaining = calculateTotalRemaining(budgets);

  const handleClickAddButton = () =>
    setDisplayedForm(DISPLAYED_FORM_ADD_EXPENSE);
  const handleClickRemoveButton = () =>
    setDisplayedForm(DISPLAYED_FORM_REMOVE_EXPENSE);
  const handleClickResetButton = () => setBudgets!!(resetCurrentBudgets);

  return {
    totalRemaining,
    handleClickResetButton,
    handleClickAddButton,
    handleClickRemoveButton,
  };
};
