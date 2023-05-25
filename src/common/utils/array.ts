export const filterOnlyUnique = (list: string[]) =>
  list.filter((value, index, array) => array.indexOf(value) === index);
