type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void;

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
  let willFnCall = true;
  setTimeout(() => {
    willFnCall && fn(...args);
  }, t);
  return () => (willFnCall = false);
}

// This problem requires little more than following the instructions, so we will:

// create a boolean flag willFnCall initially set to true;
// set a timeout in t milliseconds to call fn with args, but only if willFnCall is still true;
// return a function that sets the flag to false when called.
