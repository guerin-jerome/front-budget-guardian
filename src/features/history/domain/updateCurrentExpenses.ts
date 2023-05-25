import { Expense } from "@/entities/Expense";
import { BudgetTypeFilter, OrderValue } from "../hooks/useHeaderHistory";
import { filterExpenseByBudgetType } from "./filterExpenseByBudgetType";
import { sortExpensesByDateMoreRecent } from "./sortExpensesByDateMoreRecent";
import { sortExpensesByDateMoreOlder } from "./sortExpensesByDateMoreOlder";
import { filterExpenseByBudgetId } from "./filterExpenseByBudgetId";

/**
 * Met à jour les dépenses courantes avec les filtres et tri associés.
 * @param expenses
 * @param budgetType
 * @param orderByDate
 * @returns {Expense[]}
 */
export const updateCurrentExpenses = (
  expenses: Expense[],
  budgetId: string,
  budgetType: BudgetTypeFilter,
  orderByDate: OrderValue
) => {
  const expensesFilterByBudgetName = filterExpenseByBudgetId(
    expenses,
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
