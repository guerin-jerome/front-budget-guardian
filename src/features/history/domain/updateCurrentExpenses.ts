import { Expense } from "@/entities/Expense";
import { BudgetTypeFilter, OrderValue } from "../hooks/useHeaderHistory";
import { filterExpenseByBudgetType } from "./filterExpenseByBudgetType";
import { sortExpensesByDateMoreRecent } from "./sortExpensesByDateMoreRecent";
import { sortExpensesByDateMoreOlder } from "./sortExpensesByDateMoreOlder";

/**
 * Met à jour les dépenses courantes avec les filtres et tri associés.
 * @param expenses
 * @param budgetType
 * @param orderByDate
 * @returns {Expense[]}
 */
export const updateCurrentExpenses = (
  expenses: Expense[],
  budgetType: BudgetTypeFilter,
  orderByDate: OrderValue
) => {
  const expensesFilterByBudgetType = filterExpenseByBudgetType(
    expenses,
    budgetType
  );
  const expensesFilterAndSorted =
    orderByDate === OrderValue.MORE_RECENT
      ? sortExpensesByDateMoreRecent(expensesFilterByBudgetType)
      : sortExpensesByDateMoreOlder(expensesFilterByBudgetType);
  return expensesFilterAndSorted;
};
