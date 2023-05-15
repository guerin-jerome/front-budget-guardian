import { Expense } from "@/entities/Expense";

/**
 * Concatène les dépenses actuelles avec la nouvelle.
 * @param expense
 * @param expenses
 * @returns {Expense[]}
 */
export const addExpense = (
  expense: Expense,
  expenses: Expense[]
): Expense[] => [...expenses, expense];
