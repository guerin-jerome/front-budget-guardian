import { EBudgetType } from "../common/constants/budget";
import { TBudget } from "../interfaces/TBudget";

export const MOCK_BUDGET: TBudget = {
  id: 1,
  name: "Loisirs",
  type: EBudgetType.VARIABLE,
  spending: 5.6,
  base: 100,
};

export const MOCK_BUDGET_SAVED: TBudget = {
  id: 2,
  name: "Épargne",
  type: EBudgetType.SAVED,
  base: 200,
};

export const MOCK_BUDGET_FULL_CONSUMMED: TBudget = {
  id: 3,
  name: "Loyer",
  type: EBudgetType.FIXE,
  spending: 560,
  base: 560,
};

export const MOCK_BUDGETS: TBudget[] = [
  { ...MOCK_BUDGET },
  { ...MOCK_BUDGET_SAVED },
  { ...MOCK_BUDGET_FULL_CONSUMMED },
  {
    id: 4,
    name: "Courses",
    type: EBudgetType.VARIABLE,
    spending: 50,
    base: 175,
  },
];
