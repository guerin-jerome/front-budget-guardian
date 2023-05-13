import { BudgetType } from "./Budget";

export type BudgetImpacted = {
  id: number;
  type: BudgetType;
  name: string;
};

export type Expense = {
  id: number;
  details: string;
  date: string;
  budget: BudgetImpacted;
  value: number;
};
