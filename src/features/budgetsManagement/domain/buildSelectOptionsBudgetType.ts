import { BudgetType, BudgetTypeLibelle } from "@/entities/Budget";

type BudgetTypeOption = {
  value: BudgetType;
  text: BudgetTypeLibelle;
};

export const buildSelectOptionsBudgetType = (): BudgetTypeOption[] => [
  {
    value: BudgetType.FIXE,
    text: BudgetTypeLibelle.FIXE,
  },
  {
    value: BudgetType.VARIABLE,
    text: BudgetTypeLibelle.VARIABLE,
  },
  {
    value: BudgetType.SAVED,
    text: BudgetTypeLibelle.SAVED,
  },
];
