import { MENU_ITEM } from "../hooks/useHome";
import { PAGES, routes } from "@/routes/routes";
import { buildItemText } from "./buildItemText";
import { Dispatch, SetStateAction } from "react";
import { MenuItem } from "@/common/components";

/**
 * Construit les items du menu de navigation
 * @returns {MenuItem[]}
 */
export const buildMenuItems = (
  activeItem: MENU_ITEM,
  isMobileDevice: boolean,
  setActiveItem: Dispatch<SetStateAction<MENU_ITEM>>
): MenuItem[] => [
  {
    text: buildItemText(MENU_ITEM.EXPENSES_TRACKING, isMobileDevice),
    href: routes[PAGES.EXPENSES_TRACKING],
    isActive: activeItem === MENU_ITEM.EXPENSES_TRACKING,
    onClick: (event) => {
      event.preventDefault();
      setActiveItem(MENU_ITEM.EXPENSES_TRACKING);
    },
  },
  {
    text: buildItemText(MENU_ITEM.BUDGETS_MANAGEMENT, isMobileDevice),
    href: routes[PAGES.BUDGETS_MANAGEMENT],
    isActive: activeItem === MENU_ITEM.BUDGETS_MANAGEMENT,
    onClick: (event) => {
      event.preventDefault();
      setActiveItem(MENU_ITEM.BUDGETS_MANAGEMENT);
    },
  },
  {
    text: buildItemText(MENU_ITEM.HISTORY, isMobileDevice),
    href: routes[PAGES.HISTORY],
    isActive: activeItem === MENU_ITEM.HISTORY,
    onClick: (event) => {
      event.preventDefault();
      setActiveItem(MENU_ITEM.HISTORY);
    },
  },
];
