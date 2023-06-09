import { Card, Progress, Typography } from "@/common/components";
import { useCurrentBudget } from "../../hooks/useCurrentBudget";
import { Budget } from "@/entities/Budget";
import "./style.css";

const { Title, Muted, Bold } = Typography;

export const CurrentBudget = (budget: Budget) => {
  const { name } = budget;
  const { libelleCurrentValue, libelleType, percentConsummed, isCloseToZero } =
    useCurrentBudget(budget);

  return (
    <Card className="current-budget-card">
      <Title level={3}>{name}</Title>
      <div className="budget-info">
        <Muted>{libelleType}</Muted>
        <Bold>{libelleCurrentValue}</Bold>
      </div>
      <Progress width={percentConsummed} hasError={isCloseToZero} />
    </Card>
  );
};
