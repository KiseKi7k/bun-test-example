import { describe, expect, test } from "bun:test";
import { calculator } from ".";

describe("plus", () => {
  test("should 2 + 2 = 4", () => {
    expect(calculator(2, 2, "+")).toBe(4);
  });
  test("should 1 + 1 != 3", () => {
    expect(calculator(1, 1, "+")).not.toBe(3);
  });
});

describe("other", () => {
  test("should throw unknown operator", () => {
    expect(() => calculator(1, 2, "a")).toThrowError("Unknown operator");
  });
});
