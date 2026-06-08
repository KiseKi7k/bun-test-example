export class Queue {
  private queue: string[];

  constructor() {
    this.queue = [];
  }

  addQueue(name: string) {
    // เพิ่มคิวต่อท้าย
  }

  dequeue(): string {
    // เอาคนข้างหน้าออก เเละ return ชื่อคนนั้น
  }

  getLength(): number {
    // return จำนวนคืวปัจจุบัน
  }

  insert(name: string, pos: number) {
    // เพิ่มคิวที่ตำเเหน่ง pos โดย pos เรื่มนับจาก 0
    // ex. [a, b, c, d] -> insert("e", 1) -> [a, e, b, c, d]
  }
}
