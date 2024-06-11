type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter2(init: number): Counter {
  let count = init || 0; // initialize count to 0 or given value
  return {
    increment: () => {
      count++;
      return count;
    },
    decrement: () => {
      count--;
      return count;
    },
    reset: () => {
      count = init || 0;
      return count;
    },
  };
}

const counter = createCounter2(5);

console.log("🚀 ~ counter.increment():", counter.increment());
console.log("🚀 ~ counter.reset():", counter.reset());
console.log("🚀 ~ counter.decrement():", counter.decrement());
