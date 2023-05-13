import { MobileContextProvider } from "@/context/MobileContext";
import { render } from "@testing-library/react";
import { ReactNode } from "react";

export const renderWithMobileContextProvider = (component: ReactNode) =>
  render(<MobileContextProvider>{component}</MobileContextProvider>);
