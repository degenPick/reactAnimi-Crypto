export const formatToSixteenDigitsAndSpaces = (cardNumber: string) =>
  cardNumber
    .replace(/\s+/g, '')
    .slice(0, 16)
    .replace(/(\d{4})/g, '$1 ')
    .trim()
    .slice(0, 19);
