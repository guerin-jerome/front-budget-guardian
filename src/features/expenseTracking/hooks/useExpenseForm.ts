import { Dispatch, SetStateAction, useContext } from "react";
import {
  buildBudgetsImpactedOptions,
  buildExpenseFromInputs,
  addExpense,
  updateBudget,
} from "../domain";
import { BudgetsContext } from "@/context/BudgetsContext";
import { ExpenseFormInputs } from "../interfaces/expenseForm/ExpenseForm";
import { ExpensesContext } from "@/context/ExpensesContext";
import { Expense } from "@/entities/Expense";
import {
  DISPLAYED_FORM_DEFAULT,
  DisplayedForm,
  FormType,
} from "./useExpenseTracking";
import { SubmitHandler } from "react-hook-form";

export const useExpenseForm = (
  setDisplayedForm: Dispatch<SetStateAction<DisplayedForm>>,
  formType: FormType
) => {
  const { budgets, setBudgets } = useContext(BudgetsContext);
  const { setExpenses } = useContext(ExpensesContext);

  const budgetsImpactedOptions = buildBudgetsImpactedOptions(budgets);
  const submitLabelButtons = buildSubmitLabelButtons(isMobileDevice);

  const handleSubmitExpenseForm: SubmitHandler<ExpenseFormInputs> = (
    inputs: ExpenseFormInputs
  ) => {
    const expense: Expense = buildExpenseFromInputs(inputs, budgets, formType);
    setExpenses!!((currentExpenses) => addExpense(expense, currentExpenses));
    setBudgets!!((currentBudgets) => updateBudget(expense, currentBudgets));
    setDisplayedForm(DISPLAYED_FORM_DEFAULT);
  };

  const handleCancel = () => setDisplayedForm(DISPLAYED_FORM_DEFAULT);

  return {
    budgetsImpactedOptions,
    handleSubmitExpenseForm,
    handleCancel,
  };
};
