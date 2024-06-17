type Fn<T> = () => Promise<T>;

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise<T[]>(async (resolve, reject) => {
    const result = new Array(functions.length);
    let count = functions.length;
    for (let index = 0; index < functions.length; index++) {
      functions[index]()
        .then((resultElm) => {
          result[index] = resultElm;
          count--;

          if (count === 0) return resolve(result);
        })
        .catch((error) => reject(error));
    }
  });
}
