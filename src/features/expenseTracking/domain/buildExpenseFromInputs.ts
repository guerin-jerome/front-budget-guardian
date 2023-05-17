import { Budget } from "@/entities/Budget";
import { ExpenseFormInputs } from "../interfaces/expenseForm/ExpenseForm";
import { Expense } from "@/entities/Expense";
import { v4 as uuid } from "uuid";

/**
 * Construit une dépense depuis le formulaire de création de dépense
 * @param inputs
 * @returns {Expense}
 */
export const buildExpenseFromInputs = (
  inputs: ExpenseFormInputs,
  budgets: Budget[]
): Expense => {
  const { details, date, budgetImpacted: budgetImpactedId, amount } = inputs;
  const budgetImpacted = budgets.find(
    (budget) => budget.id === budgetImpactedId
  );
  const { id, type, name } = budgetImpacted!!;
  return {
    id: uuid(),
    budget: {
      id,
      type,
      name,
    },
    amount: parseFloat(amount),
    details: !!details ? details : undefined,
    date,
  };
};
