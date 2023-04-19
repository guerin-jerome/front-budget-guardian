import { describe, it, expect } from "vitest";
import {
  calculatePercentageFloored,
  replacePointByComma,
} from "../number.utils";

describe("Suite de tests number.utils", () => {
  describe("calculatePercentageFloored()", () => {
    it("should return 5 with num 5.6 and per 100", () => {
      expect(calculatePercentageFloored(5.6, 100)).toBe(5);
    });

    it("should return 100 with num 360 and per 360", () => {
      expect(calculatePercentageFloored(360, 360)).toBe(100);
    });
  });

  describe("replacePointByComma()", () => {
    it("should return 5,6 with 5.6", () => {
      expect(replacePointByComma(5.6)).toBe("5,6");
    });

    it("should return 100 with 100", () => {
      expect(replacePointByComma(100)).toBe("100");
    });
  });
});
