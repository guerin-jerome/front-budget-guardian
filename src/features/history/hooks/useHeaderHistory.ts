import {
  buildBudgetTypeSelectValues,
  updateCurrentExpenses,
  buildBudgetNameSelectValues,
} from "../domain";
import { ExpensesContext } from "@/context/ExpensesContext";
import { BudgetType } from "@/entities/Budget";
import { Expense } from "@/entities/Expense";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export enum OrderValue {
  MORE_RECENT = "initial_value",
  MORE_OLDER = "more-older",
}

export type BudgetTypeFilter = BudgetType | "initial_value";

export const useHeaderHistory = (
  expenseList: Expense[],
  setExpenseList: Dispatch<SetStateAction<Expense[]>>
) => {
  const { expenses, setExpenses } = useContext(ExpensesContext);

  const [expenseNameFilter, setExpenseNameFilter] = useState("");
  const [budgetIdFilter, setBudgetIdFilter] = useState("initial_value");
  const [budgetTypeFilter, setBudgetTypeFilter] =
    useState<BudgetTypeFilter>("initial_value");
  const [orderOfSortByDate, setOrderOfSortByDate] = useState(
    OrderValue.MORE_RECENT
  );

  const budgetNameSelectValues = buildBudgetNameSelectValues(expenseList);
  const budgetTypeSelectValues = buildBudgetTypeSelectValues(expenseList);
  const sortByDateSelectValues = [
    { text: "Moins récent", value: "more-older" },
  ];

  const handleChangeExpenseName = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: expenseName } = event.target;
    setExpenseNameFilter(expenseName);
    const expensesFilterAndSorted = updateCurrentExpenses(
      expenses,
      expenseName,
      budgetIdFilter,
      budgetTypeFilter,
      orderOfSortByDate
    );
    setExpenseList(expensesFilterAndSorted);
  };

  const handleChangeBudgetName = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value: idBudgetSelected } = event.target;
    setBudgetIdFilter(idBudgetSelected);
    const expensesFilterAndSorted = updateCurrentExpenses(
      expenses,
      expenseNameFilter,
      idBudgetSelected,
      budgetTypeFilter,
      orderOfSortByDate
    );
    setExpenseList(expensesFilterAndSorted);
  };

  const handleChangeBudgetType = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const typeSelected = value as BudgetTypeFilter;
    setBudgetTypeFilter(typeSelected);
    const expensesFilterAndSorted = updateCurrentExpenses(
      expenses,
      expenseNameFilter,
      budgetIdFilter,
      typeSelected,
      orderOfSortByDate
    );
    setExpenseList(expensesFilterAndSorted);
  };

  const handleChangeSortDate = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const sortDateSelected = value as OrderValue;
    setOrderOfSortByDate(sortDateSelected);
    const expensesFilterAndSorted = updateCurrentExpenses(
      expenses,
      expenseNameFilter,
      budgetIdFilter,
      budgetTypeFilter,
      sortDateSelected
    );
    setExpenseList(expensesFilterAndSorted);
  };

  const handleClickReset = () => {
    setExpenses!!([]);
  };

  return {
    budgetNameSelectValues,
    budgetTypeSelectValues,
    sortByDateSelectValues,
    handleChangeExpenseName,
    handleChangeBudgetName,
    handleChangeBudgetType,
    handleChangeSortDate,
    handleClickReset,
  };
};
