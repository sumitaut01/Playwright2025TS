function sum(
  a: number,
  b: number,
  call: (msg: string) => void
): number {
  
  let result = a + b;

  // call the callback BEFORE returning the result
  call("This is callback. Result is " + result);

  return result;
}

function greet(msg: string) {
  console.log(msg);
}

sum(2, 3, greet);
