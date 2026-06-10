import { describe, expect, it } from "bun:test";
import { calculator } from "../example";

describe("plus", () => {
  it("should 2 + 2 = 4", () => {
    expect(calculator(2, 2, "+")).toBe(4);
  });
  it("should 1 + 1 != 3", () => {
    expect(calculator(1, 1, "+")).not.toBe(3);
  });
});

describe("other", () => {
  it("should throw unknown operator", () => {
    expect(() => calculator(1, 2, "a")).toThrowError("Unknown operator");
  });
});
