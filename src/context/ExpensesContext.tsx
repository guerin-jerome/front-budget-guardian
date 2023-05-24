import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
  useMemo,
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

  const contextValues = useMemo(
    () => ({ expenses, setExpenses }),
    [expenses, setExpenses]
  );

  return (
    <ExpensesContext.Provider value={contextValues}>
      {children}
    </ExpensesContext.Provider>
  );
};
