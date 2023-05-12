import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import { Request } from "node-fetch";

// @ts-ignore
global.Request = Request;

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
