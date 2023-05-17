import { Button, ButtonAppearence, Typography } from "@/common/components";
import { RESET_BUTTON_TEXT, TOTAL_REMAINING_TITLE_SECTION } from "../label";
import { useHeaderCurrentBudget } from "../../hooks/useHeaderCurrentBudget";
import "./style.css";

const { Title } = Typography;

export const HeaderCurrentBudgets = () => {
  const { totalRemaining, handleClickResetButton } = useHeaderCurrentBudget();

  return (
    <div className="header-current-budgets">
      <Title level={3}>
        {TOTAL_REMAINING_TITLE_SECTION}
        {totalRemaining}
      </Title>
      <Button
        onClick={handleClickResetButton}
        appearence={ButtonAppearence.SECONDARY}
      >
        {RESET_BUTTON_TEXT}
      </Button>
    </div>
  );
};
