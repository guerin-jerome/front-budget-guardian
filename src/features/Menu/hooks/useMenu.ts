import { PAGES, routes } from "@/routes/routes";
import { MouseEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { buildItemText } from "../domain";
import { MENU_ITEM } from "../domain/buildItemText";
import { MobileContext } from "@/context/MobileContext";

export const useMenu = () => {
  const navigate = useNavigate();
  const isMobileDevice = useContext(MobileContext);

  const menuItems = [
    {
      text: buildItemText(MENU_ITEM.EXPENSES_TRACKING, isMobileDevice),
      href: routes[PAGES.EXPENSES_TRACKING],
      isActive: window.location.pathname === "/home/expenses-tracking",
    },
    {
      text: buildItemText(MENU_ITEM.BUDGETS_MANAGEMENT, isMobileDevice),
      href: routes[PAGES.BUDGETS_MANAGEMENT],
      isActive: window.location.pathname === "/home/budgets-management",
    },
    {
      text: buildItemText(MENU_ITEM.HISTORY, isMobileDevice),
      href: routes[PAGES.HISTORY],
      isActive: window.location.pathname === "/home/history",
    },
  ];

  const onClickItem = (event: MouseEvent<HTMLAnchorElement>, route: string) => {
    event.preventDefault();
    navigate(route);
  };

  return { menuItems, onClickItem };
};
