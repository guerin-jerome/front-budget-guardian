import { Dispatch, SetStateAction } from "react";
import { Button, ButtonAppearence, Typography } from "@/common/components";
import { TOTAL_REMAINING_TITLE_SECTION } from "../label";
import { useHeaderCurrentBudget } from "../../hooks/useHeaderCurrentBudget";
import { DisplayedForm } from "../../hooks/useExpenseTracking";
import { ResetIcon } from "./ResetIcon";
import "./style.css";

const { Title } = Typography;

type HeaderCurrentBudgetsProps = {
  isFormDisplay: boolean;
  setDisplayedForm: Dispatch<SetStateAction<DisplayedForm>>;
};

export const HeaderCurrentBudgets = ({
  isFormDisplay,
  setDisplayedForm,
}: HeaderCurrentBudgetsProps) => {
  const {
    budgets,
    totalRemaining,
    handleClickResetButton,
    handleClickAddButton,
    handleClickRemoveButton,
  } = useHeaderCurrentBudget(setDisplayedForm);

  return (
    <div className="header-current-budgets">
      <Title level={3}>
        {TOTAL_REMAINING_TITLE_SECTION}
        {totalRemaining}
      </Title>
      {!isFormDisplay && !!budgets.length && (
        <div className="header-current-budgets-actions">
          <Button
            onClick={handleClickRemoveButton}
            isIconMode
            appearence={ButtonAppearence.PRIMARY}
          >
            -
          </Button>
          <Button
            onClick={handleClickAddButton}
            isIconMode
            appearence={ButtonAppearence.SECONDARY}
          >
            +
          </Button>
          <Button
            onClick={handleClickResetButton}
            isIconMode
            appearence={ButtonAppearence.TERTIARY}
          >
            <ResetIcon />
          </Button>
        </div>
      )}
    </div>
  );
};
