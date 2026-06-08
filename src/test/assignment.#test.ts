import { describe, test, expect, beforeEach } from "bun:test";
import { Queue } from "."; // ปรับ path ให้ตรงกับไฟล์ของคุณ

describe("Queue Class", () => {
  let q: Queue;

  beforeEach(() => {
    q = new Queue();
  });

  test("should start with an empty queue", () => {
    expect(q.getLength()).toBe(0);
  });

  describe("addQueue & dequeue", () => {
    test("should add items to the end of the queue and remove from the front (FIFO)", () => {
      q.addQueue("Alice");
      q.addQueue("Bob");
      q.addQueue("Charlie");

      expect(q.getLength()).toBe(3);

      // คนที่เข้าก่อน (Alice) ต้องออกก่อน
      expect(q.dequeue()).toBe("Alice");
      expect(q.getLength()).toBe(2);

      expect(q.dequeue()).toBe("Bob");
      expect(q.dequeue()).toBe("Charlie");
      expect(q.getLength()).toBe(0);
    });

    test("should throw error or return undefined when dequeuing from an empty queue", () => {
      // หมายเหตุ: ขึ้นอยู่กับการเขียนโค้ดของคุณว่าถ้าคิวว่างจะให้ return เป็น undefined หรือ throw error
      // สมมติว่าต้องการให้ return undefined:
      expect(q.dequeue()).toBeUndefined();
    });
  });

  describe("insert", () => {
    test("should insert an item at the specific position correctly", () => {
      q.addQueue("a"); // pos 0
      q.addQueue("b"); // pos 1
      q.addQueue("c"); // pos 2
      q.addQueue("d"); // pos 3

      // [a, b, c, d] -> แทรก "e" ที่ตำแหน่ง 1
      q.insert("e", 1);

      expect(q.getLength()).toBe(5);
      expect(q.dequeue()).toBe("a"); // ตัวแรกยังเป็น a
      expect(q.dequeue()).toBe("e"); // ตัวถัดมาต้องเป็น e ที่เพิ่งแทรกเข้าไป
      expect(q.dequeue()).toBe("b");
    });

    test("should insert at position 0 (front of the queue)", () => {
      q.addQueue("Bob");
      q.insert("Alice", 0);

      expect(q.dequeue()).toBe("Alice");
    });

    test("should throw error if position is invalid (out of bounds)", () => {
      q.addQueue("Alice");

      // ลองแทรกในตำแหน่งที่ติดลบ หรือเลยความยาวของคิวที่มีอยู่
      // อย่าลืมครอบด้วย arrow function () => ... เพื่อให้ Bun ดักจับ Error ได้
      expect(() => q.insert("Bob", -1)).toThrow();
      expect(() => q.insert("Charlie", 5)).toThrow();
    });
  });
});
