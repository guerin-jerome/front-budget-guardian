import { EBudgetType } from "@/common/constants/budget";

export type TBudget = {
  id: number;
  name: string;
  type: EBudgetType;
  base: number;
  spending?: number;
};
