import { buildBudgetTypeSelectValues, updateCurrentExpenses } from "../domain";
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
  setExpenseList: Dispatch<SetStateAction<Expense[]>>
) => {
  const { expenses, setExpenses } = useContext(ExpensesContext);

  const [budgetTypeFilter, setBudgetTypeFilter] =
    useState<BudgetTypeFilter>("initial_value");
  const [orderOfSortByDate, setOrderOfSortByDate] = useState(
    OrderValue.MORE_RECENT
  );

  const budgetTypeSelectValues = buildBudgetTypeSelectValues(expenses);
  const sortByDateSelectValues = [
    { text: "Moins récent", value: "more-older" },
  ];

  const handleChangeBudgetType = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const typeSelected = value as BudgetTypeFilter;
    setBudgetTypeFilter(typeSelected);
    const expensesFilterAndSorted = updateCurrentExpenses(
      expenses,
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
      budgetTypeFilter,
      sortDateSelected
    );
    setExpenseList(expensesFilterAndSorted);
  };

  const handleClickReset = () => {
    setExpenses!!([]);
  };

  return {
    budgetTypeSelectValues,
    sortByDateSelectValues,
    handleChangeBudgetType,
    handleChangeSortDate,
    handleClickReset,
  };
};
