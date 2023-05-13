import { MobileContextProvider } from "@/context/MobileContext";
import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

export const renderWithMobileContextProvider = (component: ReactNode) =>
  render(<MobileContextProvider>{component}</MobileContextProvider>);

export const renderWithMobileAndRouterProvider = (component: ReactNode) =>
  render(
    <MobileContextProvider>
      <BrowserRouter>{component}</BrowserRouter>
    </MobileContextProvider>
  );
