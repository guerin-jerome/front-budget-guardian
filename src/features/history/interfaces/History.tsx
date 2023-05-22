import { ExpenseCard } from "./expenseCard/ExpenseCard";
import { useHistory } from "../hooks/useHistory";
import "./style.css";

export const History = () => {
  const { expensesFormatted } = useHistory();

  return (
    <ul className="expense-list">
      {expensesFormatted.map((expense) => (
        <ExpenseCard key={expense.id} {...expense} />
      ))}
    </ul>
  );
};
