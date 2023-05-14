import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
} from "react";
import { Budget } from "@/entities/Budget";
import { MOCK_BUDGETS } from "@/mocks/budget";

export type BudgetContextType = {
  budgets: Budget[];
  setBudgets?: Dispatch<SetStateAction<Budget[]>>;
};

export const BudgetContext = createContext<BudgetContextType>({
  budgets: [],
});

export const BudgetContextProvider = ({ children }: PropsWithChildren) => {
  const [budgets, setBudgets] = useState<Budget[]>(MOCK_BUDGETS);

  return (
    <BudgetContext.Provider value={{ budgets, setBudgets }}>
      {children}
    </BudgetContext.Provider>
  );
};
