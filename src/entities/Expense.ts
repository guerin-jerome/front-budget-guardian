import { BudgetType } from "./Budget";

export type BudgetImpacted = {
  id: number;
  type: BudgetType;
  name: string;
};

export type Expense = {
  id: number;
  budget: BudgetImpacted;
  amount: number;
  details?: string;
  date?: string;
};
