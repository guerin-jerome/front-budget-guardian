import { test, describe } from "vitest";
import { renderWithAllProviders } from "@/common/utils/test";
import { HeaderHistory } from "../headerHistory/HeaderHistory";
import { formExpensePresenceExpected } from "./History.test";

describe("<HeaderHistory />", () => {
  test("vue initiale", () => {
    renderWithAllProviders(
      <HeaderHistory expenseList={[]} setExpenseList={() => {}} />
    );

    formExpensePresenceExpected();
  });
});
