import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
} from "react";
import { Budget } from "@/entities/Budget";
import { MOCK_BUDGETS } from "@/mocks/budget";

export type BudgetsContextType = {
  budgets: Budget[];
  setBudgets?: Dispatch<SetStateAction<Budget[]>>;
};

export const BudgetsContext = createContext<BudgetsContextType>({
  budgets: [],
});

export const BudgetsContextProvider = ({ children }: PropsWithChildren) => {
  const [budgets, setBudgets] = useState<Budget[]>(MOCK_BUDGETS);

  return (
    <BudgetsContext.Provider value={{ budgets, setBudgets }}>
      {children}
    </BudgetsContext.Provider>
  );
};
