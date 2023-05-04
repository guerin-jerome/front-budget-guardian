import { useNavigate } from "react-router-dom";

export const ViewProductPage = () => {
  const navigate = useNavigate();

  const goToExpenseTracking = () => navigate("/home/expense-tracking");

  return (
    <>
      <p>Hello world !</p>
      <button onClick={goToExpenseTracking}>Go home</button>
    </>
  );
};
