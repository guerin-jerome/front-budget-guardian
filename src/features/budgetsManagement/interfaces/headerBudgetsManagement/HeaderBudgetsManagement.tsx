import { useHeaderBudgetsManagement } from "../../hooks/useHeaderBudgetsManagement";
import { Button, ButtonAppearence, Typography } from "@/common/components";
import { BUDGETS_TOTAL_TITLE_SECTION } from "../label";
import { Dispatch, SetStateAction } from "react";
import "./style.css";

const { Title } = Typography;

type HeaderBudgetsManagementProps = {
  isFormDisplay: boolean;
  setIsFormDisplay: Dispatch<SetStateAction<boolean>>;
};

export const HeaderBudgetsManagement = ({
  isFormDisplay,
  setIsFormDisplay,
}: HeaderBudgetsManagementProps) => {
  const { totalBudget, handleClickAddBudget } =
    useHeaderBudgetsManagement(setIsFormDisplay);

  return (
    <header className="header-budgets-management">
      <Title level={3}>
        {BUDGETS_TOTAL_TITLE_SECTION} {totalBudget}
      </Title>
      {!isFormDisplay && (
        <Button
          isIconMode
          appearence={ButtonAppearence.PRIMARY}
          onClick={handleClickAddBudget}
        >
          +
        </Button>
      )}
    </header>
  );
};
