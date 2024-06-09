function fizzBuzz(n: number): string[] {
  let results: string[] = [];
  for (let index = 1; index <= n; index++) {
    let currStr = "";
    const isDivisible3 = index % 3 === 0;
    const isDivisible5 = index % 5 === 0;

    if (isDivisible3) {
      currStr += "Fizz";
    }

    if (isDivisible5) {
      currStr += "Buzz";
    }

    if (!currStr) {
      currStr = `${index}`;
    }
    results.push(currStr);
  }

  return results;
}

const aa = fizzBuzz(15);
console.log("🚀 ~ results:", aa);
