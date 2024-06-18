type JSONValue11 =
  | null
  | boolean
  | number
  | string
  | JSONValue11[]
  | { [key: string]: JSONValue11 };
type Obj11 = Array<JSONValue11>;

function chunk(arr: Obj11[], size: number): Obj11[][] {
  const chunkArr: Obj11[][] = [];

  for (let index = 0; index < arr.length; index += size) {
    chunkArr.push(arr.slice(index, index + size));
  }

  return chunkArr;
}
