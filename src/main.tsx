import ReactDOM from "react-dom/client";
import { Router } from "./routes/Router";
import { MobileContextProvider } from "./context/MobileContext";
import { BudgetsContextProvider } from "./context/BudgetsContext";
import { ExpensesContextProvider } from "./context/ExpensesContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MobileContextProvider>
    <BudgetsContextProvider>
      <ExpensesContextProvider>
        <Router />
      </ExpensesContextProvider>
    </BudgetsContextProvider>
  </MobileContextProvider>
);
