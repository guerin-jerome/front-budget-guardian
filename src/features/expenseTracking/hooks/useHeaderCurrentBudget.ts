import { calculateTotalRemaining } from "../domain";
import { useContext } from "react";
import { BudgetContext } from "@/context/BudgetsContext";

export const useHeaderCurrentBudget = () => {
  const { budgets } = useContext(BudgetContext);

  const totalRemaining = calculateTotalRemaining(budgets);

  return { totalRemaining };
};
