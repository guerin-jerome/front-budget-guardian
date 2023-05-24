import { ExpensesContext } from "@/context/ExpensesContext";
import { useContext } from "react";

export const useHeaderHistory = () => {
  const { setExpenses } = useContext(ExpensesContext);

  const handleClickReset = () => {
    setExpenses!!([]);
  };

  return { handleClickReset };
};
