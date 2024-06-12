type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

function once(fn: Function): OnceFn {
  let count = 0;
  return function (...args) {
    if (count > 0) {
      return undefined;
    }
    count++;
    return fn(...args);
  };
}
