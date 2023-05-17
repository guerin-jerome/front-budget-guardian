import { expect, describe, test } from "vitest";
import { getDateFormattedYYYYMMDD } from "../date";

describe("getDateFormattedYYYYMMDD()", () => {
  test("with 17 decembrer 1995", () => {
    expect(
      getDateFormattedYYYYMMDD(new Date("December 17, 1995 03:24:00"))
    ).toEqual("1995-12-17");
  });

  test("with 1 january 2019", () => {
    expect(
      getDateFormattedYYYYMMDD(new Date("January 1, 2019 14:33:21"))
    ).toEqual("2019-01-01");
  });
});
