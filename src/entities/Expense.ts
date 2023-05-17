import { BudgetType } from "./Budget";

export type BudgetImpacted = {
  id: string;
  type: BudgetType;
  name: string;
};

export type Expense = {
  id: string;
  budget: BudgetImpacted;
  amount: number;
  date: string;
  details?: string;
};
