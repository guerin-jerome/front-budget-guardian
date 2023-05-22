import { ExpenseCard } from "./expenseCard/ExpenseCard";
import { MOCK_EXPENSE } from "@/mocks/expense";
import "./style.css";

export const History = () => {
  return (
    <ul className="expense-list">
      <ExpenseCard {...MOCK_EXPENSE} />
      <ExpenseCard {...MOCK_EXPENSE} />
      <ExpenseCard {...MOCK_EXPENSE} />
    </ul>
  );
};
