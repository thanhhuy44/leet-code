type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[];

function isEmpty(obj: Obj): boolean {
  return Object.keys(obj).length ? false : true;
}

const testLog1 = isEmpty([]);
console.log("🚀 ~ testLog1:", testLog1);
