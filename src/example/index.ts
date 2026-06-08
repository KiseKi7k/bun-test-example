export function calculator(x: number, y: number, operator: string) {
  if (operator === "+") {
    return x + y;
  } else if (operator === "-") {
    return x - y;
  } else if (operator === "*") {
    return x * y;
  } else if (operator === "/") {
    if (y === 0) throw new Error("Can't divide by 0");
    return x / y;
  }
  throw new Error("Unknown operator");
}
