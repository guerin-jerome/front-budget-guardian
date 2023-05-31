import { Dispatch, SetStateAction, useContext } from "react";
import { buildBudgetFromInput, buildSelectOptionsBudgetType } from "../domain";
import { BudgetFormInputs } from "../interfaces/budgetForm/BudgetForm";
import { BudgetsContext } from "@/context/BudgetsContext";

export const useBudgetForm = (
  setIsFormDisplay: Dispatch<SetStateAction<boolean>>
) => {
  const { setBudgets } = useContext(BudgetsContext);
  const budgetTypeSelectOptions = buildSelectOptionsBudgetType();

  const handleClickCancel = () => setIsFormDisplay(false);

  const handleSubmitBudgetForm = (inputs: BudgetFormInputs) => {
    const budget = buildBudgetFromInput(inputs);
    setBudgets!!((current) => [...current, budget]);
    setIsFormDisplay(false);
  };

  return { budgetTypeSelectOptions, handleClickCancel, handleSubmitBudgetForm };
};
