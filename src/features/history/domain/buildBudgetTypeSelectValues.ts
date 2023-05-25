import { SelectOption } from "@/common/components/Select/select.type";
import { filterOnlyUnique } from "@/common/utils/array";
import { buildLibelleTypeBudget } from "@/common/utils/budget";
import { BudgetType } from "@/entities/Budget";
import { Expense } from "@/entities/Expense";

/**
 * Retourne tous les types différents des dépenses.
 * @param expenses
 * @returns {SelectOption[]}
 */
export const buildBudgetTypeSelectValues = (
  expenses: Expense[]
): SelectOption[] =>
  filterOnlyUnique(expenses.map((expense) => expense.budget.type)).map(
    (type) => ({
      text: buildLibelleTypeBudget(type as BudgetType),
      value: type,
    })
  );
