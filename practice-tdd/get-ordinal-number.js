export function getOrdinalNumber(num) {
  const absNum = Math.abs(num);
  const lastTwoDigits = absNum % 100;
  const lastDigit = absNum % 10;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${num}th`;
  }

  if (lastDigit === 1) {
    return `${num}st`;
  }

  if (lastDigit === 2) {
    return `${num}nd`;
  }

  if (lastDigit === 3) {
    return `${num}rd`;
  }

  return `${num}th`;
}
