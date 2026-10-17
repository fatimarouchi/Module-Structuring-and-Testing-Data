import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
test("should return true for a proper fraction", () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(5, 5)).toEqual(false);
});

test("should return false when numerator is greater than denominator", () => {
  expect(isProperFraction(7, 3)).toEqual(false);
});

test("should return true when numerator is zero", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

test("should return false for negative numerator and denominator", () => {
  expect(isProperFraction(-1, -2)).toEqual(false);
});

test("should return true for negative numerator and positive denominator", () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
});

test("should return false for positive numerator and negative denominator", () => {
  expect(isProperFraction(1, -2)).toEqual(false);
});
