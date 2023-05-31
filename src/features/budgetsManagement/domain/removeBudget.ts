import { Budget } from "@/entities/Budget";

export const removeBudget = (id: string, budgets: Budget[]) =>
  budgets.filter((budget) => budget.id !== id);
