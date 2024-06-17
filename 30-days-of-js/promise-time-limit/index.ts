type Fn11 = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn11, t: number): Fn {
  return async function (...args) {
    return new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        reject("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then((result) => {
          clearTimeout(timeout);
          resolve(result);
        })
        .catch((error) => {
          clearTimeout(timeout);
          reject(error);
        });
    });
  };
}
