import { Typography } from "@/common/components";
import { useBudgetsManagement } from "../hooks/useBudgetsManagement";
import { NO_BUDGET_TEXT } from "./label";
import { BudgetForm } from "./budgetForm/BudgetForm";
import { HeaderBudgetsManagement } from "./headerBudgetsManagement/HeaderBudgetsManagement";
import { BudgetCard } from "./budgetCard/BudgetCard";

const { Text } = Typography;

export const BudgetsManagement = () => {
  const { budgets, isFormDisplay, setIsFormDisplay } = useBudgetsManagement();

  return (
    <div>
      <HeaderBudgetsManagement
        isFormDisplay={isFormDisplay}
        setIsFormDisplay={setIsFormDisplay}
      />
      {isFormDisplay && <BudgetForm setIsFormDisplay={setIsFormDisplay} />}
      {budgets.length === 0 && <Text>{NO_BUDGET_TEXT}</Text>}
      {budgets.map((budget) => (
        <BudgetCard key={budget.id} budget={budget} />
      ))}
    </div>
  );
};
