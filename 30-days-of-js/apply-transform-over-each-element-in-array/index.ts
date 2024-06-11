function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  return arr.map((item, index) => fn(item, index));
}
