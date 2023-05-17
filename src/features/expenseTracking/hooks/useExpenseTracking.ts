import { BudgetsContext } from "@/context/BudgetsContext";
import { useContext } from "react";

export const useExpenseTracking = () => {
  const { budgets } = useContext(BudgetsContext);

  return { budgets };
};
