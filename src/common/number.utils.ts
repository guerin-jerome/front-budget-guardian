/**
 *  Calcule le pourcentage à l'arrondi inférieur
 * @param num
 * @param per
 * @returns {number}
 */
export const calculatePercentageFloored = (num: number, per: number) =>
  Math.floor((num * 100) / per);

/**
 * Remplace le point d'un nombre décimal par une virgule
 * @param numb
 * @returns {string}
 */
export const replacePointByComma = (numb: number) =>
  numb.toString().replace(".", ",");
