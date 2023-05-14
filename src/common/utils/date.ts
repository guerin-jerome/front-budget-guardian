export const getDateFormattedYYYYMMDD = (date: Date) =>
  date.toISOString().slice(0, 10);
