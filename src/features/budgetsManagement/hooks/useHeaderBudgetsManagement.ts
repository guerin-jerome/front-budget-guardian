import { BudgetsContext } from "@/context/BudgetsContext";
import { Dispatch, SetStateAction, useContext } from "react";
import { calculateTotalOfBudgets } from "../domain";

export const useHeaderBudgetsManagement = (
  setIsFormDisplay: Dispatch<SetStateAction<boolean>>
) => {
  const { budgets } = useContext(BudgetsContext);

  const totalBudget = calculateTotalOfBudgets(budgets);

  const handleClickAddBudget = () => {
    setIsFormDisplay(true);
  };

  return { totalBudget, handleClickAddBudget };
};
