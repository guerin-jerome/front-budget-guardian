import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
  useMemo,
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

  const contextValues = useMemo(
    () => ({ budgets, setBudgets }),
    [budgets, setBudgets]
  );

  return (
    <BudgetsContext.Provider value={contextValues}>
      {children}
    </BudgetsContext.Provider>
  );
};
