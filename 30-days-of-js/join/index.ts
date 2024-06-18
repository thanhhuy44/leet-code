type JSONValueJoin =
  | null
  | boolean
  | number
  | string
  | JSONValueJoin[]
  | { [key: string]: JSONValueJoin };
type ArrayTypeJoin = { id: number } & Record<string, JSONValueJoin>;

function join(arr1: ArrayTypeJoin[], arr2: ArrayTypeJoin[]): ArrayTypeJoin[] {
  const result: any = {};

  for (let obj of arr1) {
    result[obj.id] = obj;
  }

  for (let obj of arr2) {
    if (result[obj.id]) {
      for (let key in obj) {
        result[obj.id][key] = obj[key];
      }
    } else {
      result[obj.id] = obj;
    }
  }

  return Object.values(result);
}
