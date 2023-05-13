import { BudgetContext } from "@/context/BudgetsContext";
import { useContext } from "react";

export const useExpenseTracking = () => {
  const { budgets } = useContext(BudgetContext);

  return { budgets };
};
