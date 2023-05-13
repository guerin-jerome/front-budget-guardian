import { expect, describe, test } from "vitest";
import {
  SUBMIT_LABEL_BUTTONS_DESKTOP,
  SUBMIT_LABEL_BUTTONS_MOBILE,
  buildSubmitLabelButtons,
} from "../buildSubmitLabelButtons";

describe("buildSubmitLabelButtons()", () => {
  test("with mobile device", () => {
    expect(buildSubmitLabelButtons(true)).toEqual(SUBMIT_LABEL_BUTTONS_MOBILE);
  });

  test("with desktop device", () => {
    expect(buildSubmitLabelButtons(false)).toEqual(
      SUBMIT_LABEL_BUTTONS_DESKTOP
    );
  });
});
