import {
  Budget,
  BudgetFixe,
  BudgetSaved,
  BudgetType,
  BudgetVariable,
} from "@/entities/Budget";

export const MOCK_BUDGET: Budget = {
  id: 1,
  name: "Loisirs",
  type: BudgetType.VARIABLE,
  spending: 5.6,
  base: 100,
};

export const MOCK_BUDGET_SAVED: Budget = {
  id: 2,
  name: "Placement financier",
  type: BudgetType.SAVED,
  base: 200,
};

export const MOCK_BUDGET_FULL_CONSUMMED: Budget = {
  id: 3,
  name: "Loyer",
  type: BudgetType.FIXE,
  spending: 560,
  base: 560,
};

export const MOCK_BUDGETS: Budget[] = [
  { ...MOCK_BUDGET },
  { ...MOCK_BUDGET_SAVED },
  { ...MOCK_BUDGET_FULL_CONSUMMED },
  {
    id: 4,
    name: "Courses",
    type: BudgetType.VARIABLE,
    spending: 50,
    base: 175,
  },
];

export const SAVED_BUDGET: BudgetSaved = {
  id: 1,
  type: BudgetType.SAVED,
  name: "Saved budget",
  base: 100,
};

export const FIXE_BUDGET: BudgetFixe = {
  id: 2,
  type: BudgetType.FIXE,
  name: "Fixe budget",
  base: 100,
  spending: 100,
};

export const VARIABLE_BUDGET: BudgetVariable = {
  id: 3,
  type: BudgetType.VARIABLE,
  name: "Variable budget",
  base: 100,
  spending: 5,
};
