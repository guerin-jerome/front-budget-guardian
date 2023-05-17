import { BudgetType } from "@/entities/Budget";
import { Expense } from "@/entities/Expense";

export const MOCK_EXPENSE: Expense = {
  id: "1",
  budget: {
    id: "1",
    type: BudgetType.VARIABLE,
    name: "Loisirs",
  },
  amount: 94.4,
  date: "1999-01-18",
  details: "Details loisirs",
};

export const MOCK_EXPENSE_COURSES: Expense = {
  id: "2",
  budget: {
    id: "4",
    type: BudgetType.VARIABLE,
    name: "Courses",
  },
  amount: 125,
  date: "2023-02-05",
  details: "Courses de la semaine",
};

export const MOCK_EXPENSE_SAVED: Expense = {
  id: "3",
  budget: {
    id: "2",
    type: BudgetType.SAVED,
    name: "Placement financier",
  },
  amount: 100,
  date: "2023-02-05",
  details: "Besoin personnel",
};

export const MOCK_EXPENSES: Expense[] = [MOCK_EXPENSE, MOCK_EXPENSE_COURSES];
