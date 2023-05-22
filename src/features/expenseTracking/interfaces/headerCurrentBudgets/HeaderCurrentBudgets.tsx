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
      {!isFormDisplay && (
        <div className="header-current-budgets-actions">
          <Button
            onClick={handleClickAddButton}
            isIconMode
            appearence={ButtonAppearence.SUCCESS}
          >
            +
          </Button>
          <Button
            onClick={handleClickRemoveButton}
            isIconMode
            appearence={ButtonAppearence.DANGER}
          >
            -
          </Button>
          <Button
            onClick={handleClickResetButton}
            isIconMode
            appearence={ButtonAppearence.SECONDARY}
          >
            <ResetIcon />
          </Button>
        </div>
      )}
    </div>
  );
};
