import { MENU_ITEM } from "../hooks/useHome";
import {
  MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_DESKTOP as BUDGET_MANAGEMENT_TITLE,
  MENU_ITEM_EXPENSES_TRACKING_TEXT_DESKTOP as EXPENSE_TRACKING_TITLE,
  HISTORY_TITLE,
} from "../interfaces/label";

export const findTitleByMenuItem = (menuItem: MENU_ITEM): string => {
  switch (menuItem) {
    case MENU_ITEM.EXPENSES_TRACKING:
      return EXPENSE_TRACKING_TITLE;
    case MENU_ITEM.BUDGETS_MANAGEMENT:
      return BUDGET_MANAGEMENT_TITLE;
    case MENU_ITEM.HISTORY:
      return HISTORY_TITLE;
  }
};
