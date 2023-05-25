import { Expense } from "@/entities/Expense";
import { BudgetTypeFilter, OrderValue } from "../hooks/useHeaderHistory";
import { filterExpenseByBudgetType } from "./filterExpenseByBudgetType";
import { sortExpensesByDateMoreRecent } from "./sortExpensesByDateMoreRecent";
import { sortExpensesByDateMoreOlder } from "./sortExpensesByDateMoreOlder";
import { filterExpenseByBudgetId } from "./filterExpenseByBudgetId";
import { filterExpenseByName } from "./filterExpenseByName";

/**
 * Met à jour les dépenses courantes avec les filtres et tri associés.
 * @param expenses
 * @param expenseName
 * @param budgetId
 * @param budgetType
 * @param orderByDate
 * @returns {Expense[]}
 */
export const updateCurrentExpenses = (
  expenses: Expense[],
  expenseName: string,
  budgetId: string,
  budgetType: BudgetTypeFilter,
  orderByDate: OrderValue
): Expense[] => {
  const expensesFilterByName = filterExpenseByName(expenses, expenseName);
  const expensesFilterByBudgetName = filterExpenseByBudgetId(
    expensesFilterByName,
    budgetId
  );
  const expensesFilterByBudgetType = filterExpenseByBudgetType(
    expensesFilterByBudgetName,
    budgetType
  );
  const expensesFilterAndSorted =
    orderByDate === OrderValue.MORE_RECENT
      ? sortExpensesByDateMoreRecent(expensesFilterByBudgetType)
      : sortExpensesByDateMoreOlder(expensesFilterByBudgetType);
  return expensesFilterAndSorted;
};
