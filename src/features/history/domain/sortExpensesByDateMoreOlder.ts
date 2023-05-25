import { Expense } from "@/entities/Expense";

/**
 * Tri un tableau de dépense par leur date du moins récent au plus récent
 * @param expenses
 * @returns {Expense[]}
 */
export const sortExpensesByDateMoreOlder = (expenses: Expense[]): Expense[] => {
  const sortedExpenses = expenses.slice();

  sortedExpenses.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA.getTime() - dateB.getTime();
  });

  return sortedExpenses;
};
