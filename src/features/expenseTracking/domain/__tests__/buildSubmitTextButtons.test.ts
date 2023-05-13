import { expect, describe, test } from "vitest";
import {
  SUBMIT_TEXT_BUTTONS_DESKTOP,
  SUBMIT_TEXT_BUTTONS_MOBILE,
  buildSubmitTextButtons,
} from "../buildSubmitTextButtons";

describe("buildSubmitTextButtons()", () => {
  test("with mobile device", () => {
    expect(buildSubmitTextButtons(true)).toEqual(SUBMIT_TEXT_BUTTONS_MOBILE);
  });

  test("with desktop device", () => {
    expect(buildSubmitTextButtons(false)).toEqual(SUBMIT_TEXT_BUTTONS_DESKTOP);
  });
});
