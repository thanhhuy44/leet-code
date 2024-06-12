type JSONValue1 =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue1[]): number {
  return args.length;
}

const test1 = argumentsLength([{}, null, "3"]);
console.log("🚀 ~ test1:", test1);
