import { calculateTotalRemaining, resetCurrentBudgets } from "../domain";
import { useContext } from "react";
import { BudgetsContext } from "@/context/BudgetsContext";

export const useHeaderCurrentBudget = () => {
  const { budgets, setBudgets } = useContext(BudgetsContext);

  const totalRemaining = calculateTotalRemaining(budgets);

  const handleClickResetButton = () => setBudgets!!(resetCurrentBudgets);

  return { totalRemaining, handleClickResetButton };
};
