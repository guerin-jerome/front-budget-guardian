import { BudgetsContext } from "@/context/BudgetsContext";
import { useContext, useState } from "react";

export enum FormType {
  ADD,
  REMOVE,
}

export type DisplayedForm = {
  isFormDisplay: boolean;
  formType?: FormType;
};

export const DISPLAYED_FORM_DEFAULT = { isFormDisplay: false };
export const DISPLAYED_FORM_ADD_EXPENSE = {
  isFormDisplay: true,
  formType: FormType.ADD,
};
export const DISPLAYED_FORM_REMOVE_EXPENSE = {
  isFormDisplay: true,
  formType: FormType.REMOVE,
};

export const useExpenseTracking = () => {
  const { budgets } = useContext(BudgetsContext);
  const [displayedForm, setDisplayedForm] = useState<DisplayedForm>(
    DISPLAYED_FORM_DEFAULT
  );

  return { budgets, displayedForm, setDisplayedForm };
};
