import { useNavigate } from "react-router-dom";
import { PAGES, routes } from "./routes/routes";
export const ProductPage = () => {
  const navigate = useNavigate();

  const goToExpenseTracking = () =>
    navigate(`${routes[PAGES.HOME]}/${routes[PAGES.EXPENSES_TRACKING]}`);

  return (
    <>
      <p>Hello world !</p>
      <button onClick={goToExpenseTracking} style={{ backgroundColor: "#333" }}>
        Go home
      </button>
    </>
  );
};
