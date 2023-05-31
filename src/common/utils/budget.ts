import { BudgetType, BudgetTypeLibelle } from "@/entities/Budget";
import { replacePointByComma } from "./string";

export const buildLibelleTypeBudget = (type: BudgetType): BudgetTypeLibelle => {
  switch (type) {
    case BudgetType.FIXE:
      return BudgetTypeLibelle.FIXE;
    case BudgetType.VARIABLE:
      return BudgetTypeLibelle.VARIABLE;
    case BudgetType.SAVED:
      return BudgetTypeLibelle.SAVED;
  }
};

export const formatNumberToPrice = (number: number) =>
  replacePointByComma(`${number.toFixed(2)} €`);
