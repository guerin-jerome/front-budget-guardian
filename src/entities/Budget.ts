export enum BudgetType {
  VARIABLE = "VARIABLE",
  FIXE = "FIXE",
  SAVED = "SAVED",
}

export enum BudgetTypeLibelle {
  FIXE = "Dépense fixe",
  VARIABLE = "Dépense variable",
  SAVED = "Épargne",
}

export type Budget = {
  id: number;
  type: BudgetType;
  name: string;
  base: number;
  spending?: number;
};

export type BudgetVariable = Budget & {
  type: BudgetType.VARIABLE;
  spending: number;
};

export type BudgetFixe = Budget & {
  type: BudgetType.FIXE;
  spending: number;
};

export type BudgetSaved = Budget & {
  type: BudgetType.SAVED;
};
