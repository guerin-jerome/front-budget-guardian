export enum PAGES {
  PRODUCT,
  HOME,
  EXPENSES_TRACKING,
  BUDGETS_MANAGEMENT,
  HISTORY,
}

export const routes = {
  [PAGES.PRODUCT]: "/",
  [PAGES.HOME]: "/home",
  [PAGES.EXPENSES_TRACKING]: "expenses-tracking",
  [PAGES.BUDGETS_MANAGEMENT]: "budgets-management",
  [PAGES.HISTORY]: "history",
};
