// implement a function countChar that counts the number of times a character occurs in a string
import { countChar } from "./count.js";

// Scenario: Multiple Occurrences
// Given a string `str` and a character `char` that appears several times,
// When the function is called,
// Then it should correctly count each occurrence.
test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// Scenario: Single Occurrence
// Given a string containing exactly one match,
// When the function is called,
// Then it should return 1.
test("should count a single occurrence of a character", () => {
  const str = "banana";
  const char = "n";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});

// Scenario: No Occurrences
// Given a string with no matching character,
// When the function is called,
// Then it should return 0.
test("should return 0 when the character does not occur", () => {
  const str = "hello";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Edge case: Empty String
// Given an empty string,
// When the function is called with any character,
// Then it should return 0.
test("should return 0 for an empty string", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Edge case: Character at start and end
// Given a string where the character appears at both ends,
// When the function is called,
// Then it should count both occurrences.
test("should count characters at the start and end of the string", () => {
  const str = "ahelloa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});
