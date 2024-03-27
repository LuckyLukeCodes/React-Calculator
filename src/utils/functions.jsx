export const toLocaleString = (number) => {
  return String(number).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");
};

export const removeSpaces = (number) => {
  return number.toString().replace(/\s/g, "");
};
