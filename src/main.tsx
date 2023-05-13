import ReactDOM from "react-dom/client";
import { Router } from "./routes/Router";
import { MobileContextProvider } from "./context/MobileContext";
import { BudgetContextProvider } from "./context/BudgetsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MobileContextProvider>
    <BudgetContextProvider>
      <Router />
    </BudgetContextProvider>
  </MobileContextProvider>
);
