import { afterEach, beforeEach } from "vitest";
import { cleanup } from "@testing-library/react";
import { Request } from "node-fetch";

// @ts-ignore
global.Request = Request;

let originalInnerWidth: number;

beforeEach(() => {
  originalInnerWidth = global.innerWidth;
});

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
  global.innerWidth = originalInnerWidth;
});
