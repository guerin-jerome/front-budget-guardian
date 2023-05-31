import {
  Button,
  ButtonAppearence,
  Card,
  Typography,
} from "@/common/components";
import { Budget } from "@/entities/Budget";
import { useBudgetCard } from "../../hooks/useBudgetCard";
import { TrashIcon } from "@/common/components/Icon/TrashIcon";
import "./style.css";
import {
  BUDGET_CARD_AMOUNT_LABEL,
  BUDGET_CARD_NAME_LABEL,
  BUDGET_CARD_TYPE_LABEL,
} from "../label";

type BudgetCardProps = {
  budget: Budget;
};

const { Bold, Muted, Text } = Typography;

export const BudgetCard = ({ budget }: BudgetCardProps) => {
  const { libelleTypeBudget, amount, handleClickRemove } =
    useBudgetCard(budget);
  const { name } = budget;

  return (
    <Card className="budget-card">
      <div className="budget-card-item">
        <Muted>{BUDGET_CARD_NAME_LABEL}</Muted>
        <Bold>{name}</Bold>
      </div>
      <div className="budget-card-item">
        <Muted>{BUDGET_CARD_TYPE_LABEL}</Muted>
        <Text>{libelleTypeBudget}</Text>
      </div>
      <div className="budget-card-item">
        <Muted>{BUDGET_CARD_AMOUNT_LABEL}</Muted>
        <Bold>{amount}</Bold>
      </div>
      <Button
        appearence={ButtonAppearence.SECONDARY}
        isIconMode
        onClick={handleClickRemove}
      >
        <TrashIcon />
      </Button>
    </Card>
  );
};
