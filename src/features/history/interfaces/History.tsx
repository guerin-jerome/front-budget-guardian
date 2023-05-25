import { ExpenseCard } from "./expenseCard/ExpenseCard";
import { useHistory } from "../hooks/useHistory";
import { HeaderHistory } from "./headerHistory/HeaderHistory";
import { Typography } from "@/common/components";
import "./style.css";
import { EMPTY_EXPENSE_TEXT } from "./label";

const { Text } = Typography;

export const History = () => {
  const { expenses, expenseList, setExpenseList } = useHistory();

  return (
    <>
      {!!expenses.length && (
        <>
          <HeaderHistory setExpenseList={setExpenseList} />
          <ul className="expense-list">
            {expenseList.map((expense) => (
              <ExpenseCard key={expense.id} {...expense} />
            ))}
          </ul>
        </>
      )}
      {!expenses.length && <Text>{EMPTY_EXPENSE_TEXT}</Text>}
    </>
  );
};
