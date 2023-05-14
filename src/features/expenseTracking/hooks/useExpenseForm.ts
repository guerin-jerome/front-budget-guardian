import { MobileContext } from "@/context/MobileContext";
import { useContext } from "react";
import { buildSubmitTextButtons, buildBudgetsImpactedOptions } from "../domain";
import { BudgetsContext } from "@/context/BudgetsContext";
import { ExpenseFormInputs } from "../interfaces/expenseForm/ExpenseForm";
import { ExpensesContext } from "@/context/ExpensesContext";
import { Expense } from "@/entities/Expense";

export const useExpenseForm = () => {
  const { budgets, setBudgets } = useContext(BudgetsContext);
  const { expenses, setExpenses } = useContext(ExpensesContext);
  const isMobileDevice = useContext(MobileContext);

  const budgetsImpactedOptions = buildBudgetsImpactedOptions(budgets);
  const submitTextButtons = buildSubmitTextButtons(isMobileDevice);

  const handleSubmitExpenseForm = (inputs: ExpenseFormInputs) => {
    // TODO: create expense, add it on context, remove expense to budget and update context
  };

  return {
    budgetsImpactedOptions,
    submitTextButtons,
    isMobileDevice,
    handleSubmitExpenseForm,
  };
};
