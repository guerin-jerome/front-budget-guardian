import { Budget, BudgetType } from "@/entities/Budget";

export enum MENU_ITEM {
  EXPENSES_TRACKING,
  BUDGETS_MANAGEMENT,
  HISTORY,
}

export const MENU_ITEM_EXPENSES_TRACKING_TEXT_DESKTOP = "Suivi des dépenses";
export const MENU_ITEM_EXPENSES_TRACKING_TEXT_MOBILE = "Suivi";
export const MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_DESKTOP = "Gestion des budgets";
export const MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_MOBILE = "Gestion";
export const MENU_ITEM_HISTORIQUE_TEXT = "Historique";

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
