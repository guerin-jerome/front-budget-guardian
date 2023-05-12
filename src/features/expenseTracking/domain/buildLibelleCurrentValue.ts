import { Budget, BudgetType } from "@/entities/Budget";

/**
 * Donne le libellé à afficher pour la valeur courante du budget
 * @param budget
 * @returns {string}
 */
export const buildLibelleCurrentValue = ({
  type,
  base,
  spending,
}: Budget): string =>
  type !== BudgetType.SAVED ? `${spending}€/${base}€` : `${base}€`;
