import { getCardValue } from "../implement/3-get-card-value.js";

test("Returns the value of number cards from 2 to 10", () => {
  const suits = ["♠", "♥", "♦", "♣"];

  for (let rank = 2; rank <= 10; rank += 1) {
    for (const suit of suits) {
      expect(getCardValue(`${rank}${suit}`)).toEqual(rank);
    }
  }
});

test("Returns 10 for face cards", () => {
  const suits = ["♠", "♥", "♦", "♣"];

  for (const rank of ["J", "Q", "K"]) {
    for (const suit of suits) {
      expect(getCardValue(`${rank}${suit}`)).toEqual(10);
    }
  }
});

test("Returns 11 for aces", () => {
  for (const suit of ["♠", "♥", "♦", "♣"]) {
    expect(getCardValue(`A${suit}`)).toEqual(11);
  }
});

test("Throws an error for invalid card formats", () => {
  const invalidCards = [
    "A",
    "invalid",
    "1♠",
    "11♠",
    "02♠",
    "0x02♦",
    "2.1♦",
    "0002♦",
    "2.5♠",
    " 2♠",
    "A?",
    "",
  ];

  for (const card of invalidCards) {
    expect(() => getCardValue(card)).toThrow(
      `Expected a number followed by a suit, but got "${card}"`
    );
  }
});
