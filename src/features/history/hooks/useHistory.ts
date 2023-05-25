import { ExpensesContext } from "@/context/ExpensesContext";
import { useContext, useEffect, useState } from "react";
import { sortExpensesByDateMoreRecent } from "../domain";

export const useHistory = () => {
  const { expenses } = useContext(ExpensesContext);
  const [expenseList, setExpenseList] = useState(
    sortExpensesByDateMoreRecent(expenses)
  );

  useEffect(
    () => setExpenseList(sortExpensesByDateMoreRecent(expenses)),
    [expenses]
  );

  return { expenses, expenseList, setExpenseList };
};
