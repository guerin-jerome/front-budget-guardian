import { test, describe } from "vitest";
import { renderWithAllProviders } from "@/common/utils/test";
import { History } from "../History";

describe("<History />", () => {
  test("initial view", async () => {
    renderWithAllProviders(<History />);
  });
});
