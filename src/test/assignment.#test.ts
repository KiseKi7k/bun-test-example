import { describe, it, expect, beforeEach } from "bun:test";
import { Queue } from "../assignment";

describe("Queue Class", () => {
  let q: Queue;

  beforeEach(() => {
    q = new Queue();
  });

  it("should start with an empty queue", () => {
    expect(q.getLength()).toBe(0);
  });

  describe("addQueue & dequeue", () => {
    it("should add items to the end of the queue and remove from the front (FIFO)", () => {
      q.addQueue("Alice");
      q.addQueue("Bob");
      q.addQueue("Charlie");

      expect(q.getLength()).toBe(3);

      expect(q.dequeue()).toBe("Alice");
      expect(q.getLength()).toBe(2);

      expect(q.dequeue()).toBe("Bob");
      expect(q.dequeue()).toBe("Charlie");
      expect(q.getLength()).toBe(0);
    });

    it("should throw error or return undefined when dequeuing from an empty queue", () => {
      expect(q.dequeue()).toBeUndefined();
    });
  });

  describe("insert", () => {
    it("should insert an item at the specific position correctly", () => {
      q.addQueue("a"); // pos 0
      q.addQueue("b"); // pos 1
      q.addQueue("c"); // pos 2
      q.addQueue("d"); // pos 3

      q.insert("e", 1);

      expect(q.getLength()).toBe(5);
      expect(q.dequeue()).toBe("a");
      expect(q.dequeue()).toBe("e");
      expect(q.dequeue()).toBe("b");
    });

    it("should insert at position 0 (front of the queue)", () => {
      q.addQueue("Bob");
      q.insert("Alice", 0);

      expect(q.dequeue()).toBe("Alice");
    });

    it("should throw error if position is invalid (out of bounds)", () => {
      q.addQueue("Alice");

      expect(() => q.insert("Bob", -1)).toThrow();
      expect(() => q.insert("Charlie", 5)).toThrow();
    });
  });
});
