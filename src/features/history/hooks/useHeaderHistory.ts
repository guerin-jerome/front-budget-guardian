import { ExpensesContext } from "@/context/ExpensesContext";
import { Expense } from "@/entities/Expense";
import { ChangeEvent, Dispatch, SetStateAction, useContext } from "react";
import {
  sortExpensesByDateMoreOlder,
  sortExpensesByDateMoreRecent,
} from "../domain";

export enum OrderValue {
  MORE_RECENT = "initial_value",
  MORE_OLDER = "more-older",
}

export const useHeaderHistory = (
  setExpenseList: Dispatch<SetStateAction<Expense[]>>
) => {
  const { expenses, setExpenses } = useContext(ExpensesContext);

  const sortByDateSelectValues = [
    { text: "Moins récent", value: "more-older" },
  ];

  const handleChangeSortDate = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    switch (value) {
      case OrderValue.MORE_OLDER:
        setExpenseList(sortExpensesByDateMoreOlder(expenses));
        break;
      case OrderValue.MORE_RECENT:
      default:
        setExpenseList(sortExpensesByDateMoreRecent(expenses));
    }
  };

  const handleClickReset = () => {
    setExpenses!!([]);
  };

  return { sortByDateSelectValues, handleClickReset, handleChangeSortDate };
};
