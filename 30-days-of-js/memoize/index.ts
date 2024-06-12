type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const memoizeSum = (a: number, b: number) => a + b;
const memoizefib = (a: number) =>
  a <= 1 ? a : memoizefib(a - 1) + memoizefib(a - 2);
const memoizeFac = (a: number) => (a <= 1 ? 1 : memoizeFac(a - 1) * a);
