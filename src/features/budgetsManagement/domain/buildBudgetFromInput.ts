import { Budget, BudgetType } from "@/entities/Budget";
import { BudgetFormInputs } from "../interfaces/budgetForm/BudgetForm";
import { v4 as uuid } from "uuid";

export const buildBudgetFromInput = ({
  name,
  type,
  amount,
}: BudgetFormInputs): Budget => {
  return {
    id: uuid(),
    name: name,
    type: type as BudgetType,
    base: parseFloat(amount),
    remaining: type === BudgetType.SAVED ? undefined : parseFloat(amount),
  };
};
