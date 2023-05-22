import { capitalizeFirstLetter } from "@/common/utils/string";

/**
 * Prend une date en string et la formatte en date écrite en français.
 * @param date
 * @returns {string}
 */
export const formatDate = (date: string): string =>
  capitalizeFirstLetter(
    new Date(date).toLocaleDateString("fr-FR", {
      dateStyle: "full",
    })
  );
