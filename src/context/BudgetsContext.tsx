import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
} from "react";
import { Budget } from "@/entities/Budget";
import { MOCK_BUDGETS } from "@/mocks/budget";

type BudgetContextType = Partial<{
  budgets: Budget[];
  setBudgets: Dispatch<SetStateAction<Budget[]>>;
}>;

export const BudgetContext = createContext<BudgetContextType>({});

export const BudgetContextProvider = ({ children }: PropsWithChildren) => {
  const [budgets, setBudgets] = useState<Budget[]>(MOCK_BUDGETS);

  return (
    <BudgetContext.Provider value={{ budgets, setBudgets }}>
      {children}
    </BudgetContext.Provider>
  );
};
