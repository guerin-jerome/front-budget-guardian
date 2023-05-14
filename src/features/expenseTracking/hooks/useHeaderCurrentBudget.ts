import { calculateTotalRemaining, resetCurrentBudgets } from "../domain";
import { useContext } from "react";
import { BudgetContext } from "@/context/BudgetsContext";

export const useHeaderCurrentBudget = () => {
  const { budgets, setBudgets } = useContext(BudgetContext);

  const totalRemaining = calculateTotalRemaining(budgets);

  const handleClickResetButton = () => setBudgets!!(resetCurrentBudgets);

  return { totalRemaining, handleClickResetButton };
};
