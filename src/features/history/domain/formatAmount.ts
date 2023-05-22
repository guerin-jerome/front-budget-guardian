import { replacePointByComma } from "@/common/utils/string";

/**
 * Prend un montant, l'arrondi aux centimes près et remplace le point
 * par une virgule.
 * @param amount
 * @returns {string}
 */
export const formatAmount = (amount: number): string =>
  replacePointByComma(amount.toFixed(2))!!;
