interface Array<T> {
  groupBy(fn: (item: T) => string): Record<string, T[]>;
}

Array.prototype.groupBy = function (fn) {
  let obj = {};
  for (let index = 0; index < this.length; index++) {
    const key = fn(this[index]);
    obj[key] ||= [];
    obj[key].push(this[index]);
  }
  return obj;
};
