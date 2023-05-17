import { MobileContext } from "@/context/MobileContext";
import { useContext } from "react";
import {
  buildSubmitTextButtons,
  buildBudgetsImpactedOptions,
  buildExpenseFromInputs,
  addExpense,
  removeExpenseToBudget,
} from "../domain";
import { BudgetsContext } from "@/context/BudgetsContext";
import { ExpenseFormInputs } from "../interfaces/expenseForm/ExpenseForm";
import { ExpensesContext } from "@/context/ExpensesContext";
import { Expense } from "@/entities/Expense";

export const useExpenseForm = () => {
  const { budgets, setBudgets } = useContext(BudgetsContext);
  const { setExpenses } = useContext(ExpensesContext);
  const isMobileDevice = useContext(MobileContext);

  const budgetsImpactedOptions = buildBudgetsImpactedOptions(budgets);
  const submitTextButtons = buildSubmitTextButtons(isMobileDevice);

  const handleSubmitExpenseForm = (inputs: ExpenseFormInputs) => {
    const expense: Expense = buildExpenseFromInputs(inputs, budgets);
    setExpenses!!((currentExpenses) => addExpense(expense, currentExpenses));
    setBudgets!!((currentBudgets) =>
      removeExpenseToBudget(expense, currentBudgets)
    );
  };

  return {
    budgetsImpactedOptions,
    submitTextButtons,
    isMobileDevice,
    handleSubmitExpenseForm,
  };
};
