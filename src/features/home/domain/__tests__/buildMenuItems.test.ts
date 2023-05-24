import { expect, describe, test } from "vitest";
import { MENU_ITEM } from "../../hooks/useHome";
import { buildMenuItems } from "../buildMenuItems";
import {
  MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_DESKTOP,
  MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_MOBILE,
  MENU_ITEM_EXPENSES_TRACKING_TEXT_DESKTOP,
  MENU_ITEM_EXPENSES_TRACKING_TEXT_MOBILE,
  MENU_ITEM_HISTORIQUE_TEXT,
} from "../../interfaces/label";
import { PAGES, routes } from "@/routes/routes";

describe("buildMenuItems()", () => {
  test("with active item expense tracking and desktop device", () => {
    const menuItems = buildMenuItems(
      MENU_ITEM.EXPENSES_TRACKING,
      false,
      () => {}
    );

    const [expensesTrackingItem, budgetsManagementItem, historyItem] =
      menuItems;

    expect(menuItems.length).toEqual(3);

    expect(expensesTrackingItem.text).toEqual(
      MENU_ITEM_EXPENSES_TRACKING_TEXT_DESKTOP
    );
    expect(expensesTrackingItem.href).toEqual(routes[PAGES.EXPENSES_TRACKING]);
    expect(expensesTrackingItem.isActive).toBeTruthy();

    expect(budgetsManagementItem.text).toEqual(
      MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_DESKTOP
    );
    expect(budgetsManagementItem.href).toEqual(
      routes[PAGES.BUDGETS_MANAGEMENT]
    );
    expect(budgetsManagementItem.isActive).toBeFalsy();

    expect(historyItem.text).toEqual(MENU_ITEM_HISTORIQUE_TEXT);
    expect(historyItem.href).toEqual(routes[PAGES.HISTORY]);
    expect(historyItem.isActive).toBeFalsy();
  });

  test("with active item history and mobile device", () => {
    const menuItems = buildMenuItems(MENU_ITEM.HISTORY, true, () => {});

    const [expensesTrackingItem, budgetsManagementItem, historyItem] =
      menuItems;

    expect(menuItems.length).toEqual(3);

    expect(expensesTrackingItem.text).toEqual(
      MENU_ITEM_EXPENSES_TRACKING_TEXT_MOBILE
    );
    expect(expensesTrackingItem.href).toEqual(routes[PAGES.EXPENSES_TRACKING]);
    expect(expensesTrackingItem.isActive).toBeFalsy();

    expect(budgetsManagementItem.text).toEqual(
      MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_MOBILE
    );
    expect(budgetsManagementItem.href).toEqual(
      routes[PAGES.BUDGETS_MANAGEMENT]
    );
    expect(budgetsManagementItem.isActive).toBeFalsy();

    expect(historyItem.text).toEqual(MENU_ITEM_HISTORIQUE_TEXT);
    expect(historyItem.href).toEqual(routes[PAGES.HISTORY]);
    expect(historyItem.isActive).toBeTruthy();
  });
});
