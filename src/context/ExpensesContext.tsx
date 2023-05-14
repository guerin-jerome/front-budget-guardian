import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
} from "react";
import { Expense } from "@/entities/Expense";

export type ExpensesContextType = {
  expenses: Expense[];
  setExpenses?: Dispatch<SetStateAction<Expense[]>>;
};

export const ExpensesContext = createContext<ExpensesContextType>({
  expenses: [],
});

export const ExpensesContextProvider = ({ children }: PropsWithChildren) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  return (
    <ExpensesContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </ExpensesContext.Provider>
  );
};
