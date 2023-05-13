import { replacePointByComma } from "@/common/utils/string";
import { Budget, BudgetType } from "@/entities/Budget";

/**
 * Donne le libellé à afficher pour la valeur courante du budget
 * @param budget
 * @returns {string}
 */
export const buildLibelleCurrentValue = ({
  type,
  base,
  remaining,
}: Budget): string =>
  replacePointByComma(
    type !== BudgetType.SAVED ? `${remaining}€/${base}€` : `${base}€`
  )!!;
