//Create a function that accepts a string or number and returns its length (if string) or value (if number).

function f1(x: string | number): number {
  if(typeof x === 'string') {
    return x.length;
  } 
  return x;
}

console.log(f1('dfadf'));