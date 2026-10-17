import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
test("Should return 2 when given a 2 card", () => {
  expect(getCardValue("2♠")).toEqual(2);
});

test("Should return 10 when given a 10 card", () => {
  expect(getCardValue("10♠")).toEqual(10);
});
//   Face Cards (J, Q, K)
test("Should return 10 when given a Jack", () => {
  expect(getCardValue("J♠")).toEqual(10);
});

test("Should return 10 when given a Queen", () => {
  expect(getCardValue("Q♠")).toEqual(10);
});

test("Should return 10 when given a King", () => {
  expect(getCardValue("K♠")).toEqual(10);
});
//   Invalid Cards
test("Should throw an error for invalid text", () => {
  expect(() => getCardValue("invalid")).toThrow();
});

test("Should throw an error when suit is missing", () => {
  expect(() => getCardValue("A")).toThrow();
});

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
