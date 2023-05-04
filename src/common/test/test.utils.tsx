import { Router } from "@/routes/Router";
import { render } from "@testing-library/react";

export const renderWithRouter = (ui: JSX.Element, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return {
    ...render(ui, { wrapper: Router }),
  };
};
