import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
} from "react";
import { Expense } from "@/entities/Expense";
import { MOCK_EXPENSES } from "@/mocks/expense";

export type ExpensesContextType = {
  expenses: Expense[];
  setExpenses?: Dispatch<SetStateAction<Expense[]>>;
};

export const ExpensesContext = createContext<ExpensesContextType>({
  expenses: [],
});

export const ExpensesContextProvider = ({ children }: PropsWithChildren) => {
  const [expenses, setExpenses] = useState<Expense[]>(MOCK_EXPENSES);

  return (
    <ExpensesContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </ExpensesContext.Provider>
  );
};
