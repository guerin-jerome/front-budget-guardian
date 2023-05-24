import { ExpenseCard } from "./expenseCard/ExpenseCard";
import { useHistory } from "../hooks/useHistory";
import { HeaderHistory } from "./headerHistory/HeaderHistory";
import { Typography } from "@/common/components";
import "./style.css";
import { EMPTY_EXPENSE_TEXT } from "./label";

const { Text } = Typography;

export const History = () => {
  const { expensesFormatted } = useHistory();

  return (
    <>
      {expensesFormatted.length ? (
        <>
          <HeaderHistory />
          <ul className="expense-list">
            {expensesFormatted.map((expense) => (
              <ExpenseCard key={expense.id} {...expense} />
            ))}
          </ul>
        </>
      ) : (
        <Text>{EMPTY_EXPENSE_TEXT}</Text>
      )}
    </>
  );
};
