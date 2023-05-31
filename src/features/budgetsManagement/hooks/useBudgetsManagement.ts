import { BudgetsContext } from "@/context/BudgetsContext";
import { useContext, useState } from "react";

export const useBudgetsManagement = () => {
  const { budgets } = useContext(BudgetsContext);
  const [isFormDisplay, setIsFormDisplay] = useState(false);

  return { budgets, isFormDisplay, setIsFormDisplay };
};
