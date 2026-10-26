import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

test("Returns the correct value for every valid rank and suit", () => {
  const expectedValues = {
    A: 11,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 10,
    Q: 10,
    K: 10,
  };
  const suits = ["♠", "♥", "♦", "♣"];

  for (const [rank, value] of Object.entries(expectedValues)) {
    for (const suit of suits) {
      assert.equal(getCardValue(`${rank}${suit}`), value);
    }
  }
});

test("Throws an error for invalid card formats", () => {
  const invalidCards = ["A", "invalid", "1♠", "11♠", "02♠", "2.5♠", " 2♠", "A?", ""];

  for (const card of invalidCards) {
    assert.throws(() => getCardValue(card), {
      message: `Expected a number followed by a suit, but got "${card}"`,
    });
  }
});
