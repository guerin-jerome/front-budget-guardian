import ReactDOM from "react-dom/client";
import { Router } from "./routes/Router";
import { MobileContextProvider } from "./context/MobileContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MobileContextProvider>
    <Router />
  </MobileContextProvider>
);
