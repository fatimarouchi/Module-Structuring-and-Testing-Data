import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

test("Basic proper fraction", () => {
  // Example: 1/2 is a proper fraction
  assert.equal(isProperFraction(1, 2), true);
});
test("Another proper fraction", () => {
  assert.equal(isProperFraction(3, 4), true);
});

test("Large proper fraction", () => {
  assert.equal(isProperFraction(99, 100), true);
});

test("Equal numerator and denominator", () => {
  assert.equal(isProperFraction(5, 5), false);
});

test("Numerator greater than denominator", () => {
  assert.equal(isProperFraction(7, 3), false);
});

test("Large improper fraction", () => {
  assert.equal(isProperFraction(100, 99), false);
});

test("Zero numerator", () => {
  assert.equal(isProperFraction(0, 5), true);
});

test("Numerator one less than denominator", () => {
  assert.equal(isProperFraction(9, 10), true);
});

test("Numerator one more than denominator", () => {
  assert.equal(isProperFraction(11, 10), false);
});
