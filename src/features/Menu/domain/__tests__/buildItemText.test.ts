import { expect, describe, test } from "vitest";
import {
  MENU_ITEM,
  MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_DESKTOP,
  MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_MOBILE,
  MENU_ITEM_EXPENSES_TRACKING_TEXT_DESKTOP,
  MENU_ITEM_EXPENSES_TRACKING_TEXT_MOBILE,
  MENU_ITEM_HISTORIQUE_TEXT,
  buildItemText,
} from "../buildItemText";

describe("buildItemText()", () => {
  test("with expenses tracking item and desktop device", () => {
    expect(buildItemText(MENU_ITEM.EXPENSES_TRACKING, false)).toEqual(
      MENU_ITEM_EXPENSES_TRACKING_TEXT_DESKTOP
    );
  });

  test("with expenses tracking item and mobile device", () => {
    expect(buildItemText(MENU_ITEM.EXPENSES_TRACKING, true)).toEqual(
      MENU_ITEM_EXPENSES_TRACKING_TEXT_MOBILE
    );
  });

  test("with budgets management item and desktop device", () => {
    expect(buildItemText(MENU_ITEM.BUDGETS_MANAGEMENT, false)).toEqual(
      MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_DESKTOP
    );
  });

  test("with budgets management item and mobile device", () => {
    expect(buildItemText(MENU_ITEM.BUDGETS_MANAGEMENT, true)).toEqual(
      MENU_ITEM_BUDGETS_MANAGEMENT_TEXT_MOBILE
    );
  });

  test("with history item and desktop device", () => {
    expect(buildItemText(MENU_ITEM.HISTORY, false)).toEqual(
      MENU_ITEM_HISTORIQUE_TEXT
    );
  });

  test("with history item and mobile device", () => {
    expect(buildItemText(MENU_ITEM.HISTORY, true)).toEqual(
      MENU_ITEM_HISTORIQUE_TEXT
    );
  });
});
