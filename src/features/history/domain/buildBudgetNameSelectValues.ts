import { SelectOption } from "@/common/components/Select/select.type";
import { filterOnlyUnique } from "@/common/utils/array";
import { Expense } from "@/entities/Expense";

/**
 * Retourne tous les noms des budgets ayant déjà une dépense.
 * @param expenses
 * @returns {SelectOption[]}
 */
export const buildBudgetNameSelectValues = (
  expenses: Expense[]
): SelectOption[] =>
  filterOnlyUnique(expenses.map((expense) => expense.budget.id)).map((id) => ({
    text: expenses.find((expense) => expense.budget.id === id)!!.budget.name,
    value: id,
  }));
