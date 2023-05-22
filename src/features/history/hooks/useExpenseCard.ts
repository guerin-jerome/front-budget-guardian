import { buildLibelleTypeBudget } from "@/common/utils/budget";
import { Expense } from "@/entities/Expense";
import { formatAmount, formatDate } from "../domain";

export const useExpenseCard = (expense: Expense) => {
  const { budget, date, amount } = expense;
  const { type } = budget;

  const formattedDate = formatDate(date);
  const formattedAmount = formatAmount(amount);
  const budgetType = buildLibelleTypeBudget(type);

  return { formattedDate, formattedAmount, budgetType };
};
