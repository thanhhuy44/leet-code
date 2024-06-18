type JSONValue2 =
  | null
  | boolean
  | number
  | string
  | JSONValue2[]
  | { [key: string]: JSONValue2 };
type Fn2 = (value: JSONValue2) => number;

function sortBy(arr: JSONValue2[], fn: Fn2): JSONValue2[] {
  return arr.sort((a, b) => fn(a) - fn(b));
}
