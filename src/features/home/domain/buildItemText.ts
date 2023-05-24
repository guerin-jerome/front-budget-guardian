import { MENU_ITEM } from "../hooks/useHome";
import {
  MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_DESKTOP,
  MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_MOBILE,
  MENU_ITEM_EXPENSES_TRACKING_TEXT_DESKTOP,
  MENU_ITEM_EXPENSES_TRACKING_TEXT_MOBILE,
  MENU_ITEM_HISTORIQUE_TEXT,
} from "../interfaces/label";

/**
 * Construit le libellé à afficher pour l'item de navigation
 * @param item
 * @returns {string}
 */
export const buildItemText = (
  item: MENU_ITEM,
  isMobileDevice: boolean
): string => {
  switch (item) {
    case MENU_ITEM.EXPENSES_TRACKING:
      return isMobileDevice
        ? MENU_ITEM_EXPENSES_TRACKING_TEXT_MOBILE
        : MENU_ITEM_EXPENSES_TRACKING_TEXT_DESKTOP;
    case MENU_ITEM.BUDGETS_MANAGEMENT:
      return isMobileDevice
        ? MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_MOBILE
        : MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_DESKTOP;
    case MENU_ITEM.HISTORY:
      return MENU_ITEM_HISTORIQUE_TEXT;
  }
};
