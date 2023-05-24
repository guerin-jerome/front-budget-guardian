import { useContext, useEffect, useState } from "react";
import { buildMenuItems } from "../domain";
import { MobileContext } from "@/context/MobileContext";
import { useNavigate } from "react-router-dom";

export enum MENU_ITEM {
  EXPENSES_TRACKING,
  BUDGETS_MANAGEMENT,
  HISTORY,
}

export const useHome = () => {
  const [activeItem, setActiveItem] = useState(MENU_ITEM.EXPENSES_TRACKING);
  const isMobileDevice = useContext(MobileContext);
  const navigate = useNavigate();

  const menuItems = buildMenuItems(activeItem, isMobileDevice, setActiveItem);

  useEffect(() => {
    const itemActive = menuItems.find((item) => item.isActive);
    navigate(itemActive?.href!!);
  }, [activeItem]);

  return { menuItems };
};
