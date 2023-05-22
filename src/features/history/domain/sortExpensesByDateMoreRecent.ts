import { Expense } from "@/entities/Expense";

/**
 * Tri un tableau de dépense par leur date
 * @param expenses
 * @returns {Expense[]}
 */
export const sortExpensesByDateMoreRecent = (
  expenses: Expense[]
): Expense[] => {
  const sortedExpenses = expenses.slice();

  sortedExpenses.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB.getTime() - dateA.getTime();
  });

  return sortedExpenses;
};
