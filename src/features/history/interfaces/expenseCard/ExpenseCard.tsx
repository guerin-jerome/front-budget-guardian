import { Card, Typography } from "@/common/components";
import { Expense } from "@/entities/Expense";
import { useExpenseCard } from "../../hooks/useExpenseCard";
import "./style.css";

const { Text, Muted } = Typography;

export const ExpenseCard = (expense: Expense) => {
  const { formattedDate, formattedAmount, budgetType, classNameAmountText } =
    useExpenseCard(expense);
  const { budget, details } = expense;
  const { name: budgetName } = budget;

  return (
    <li>
      <Card className="expense-card">
        <div className="expense-informations">
          <Text className={classNameAmountText}>{formattedAmount}€</Text>
          <div className="expense-informations-complementaires">
            <Text>{details}</Text>
            <Muted>{formattedDate}</Muted>
          </div>
        </div>
        <div className="expense-budget-name">
          <Muted>Budget :</Muted>
          <Text>{budgetName}</Text>
        </div>
        <div className="expense-budget-type">
          <Muted>Type :</Muted>
          <Text>{budgetType}</Text>
        </div>
      </Card>
    </li>
  );
};
