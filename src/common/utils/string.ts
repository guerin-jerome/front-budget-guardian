export const replacePointByComma = (string?: string) =>
  string?.replaceAll(".", ",");

export const capitalizeFirstLetter = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);
