import {
  buildLibelleTypeBudget,
  formatNumberToPrice,
} from "@/common/utils/budget";
import { BudgetsContext } from "@/context/BudgetsContext";
import { Budget } from "@/entities/Budget";
import { useContext } from "react";
import { removeBudget } from "../domain";

export const useBudgetCard = ({ id, type, base }: Budget) => {
  const { setBudgets } = useContext(BudgetsContext);

  const libelleTypeBudget = buildLibelleTypeBudget(type);
  const amount = formatNumberToPrice(base);

  const handleClickRemove = () =>
    setBudgets!!((current) => removeBudget(id, current));

  return { libelleTypeBudget, amount, handleClickRemove };
};
