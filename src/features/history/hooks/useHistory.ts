import { ExpensesContext } from "@/context/ExpensesContext";
import { useContext } from "react";
import { sortExpensesByDateMoreRecent } from "../domain";

export const useHistory = () => {
  const { expenses } = useContext(ExpensesContext);

  const expensesFormatted = sortExpensesByDateMoreRecent(expenses);

  return { expensesFormatted };
};
