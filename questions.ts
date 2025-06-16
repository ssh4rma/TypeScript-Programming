//Create a function that accepts a string or number and returns its length (if string) or value (if number).

function f1(x: string | number): number {
  if(typeof x === 'string') {
    return x.length;
  } 
  return x;
}

console.log(f1('dfadf'));

//Define a type alias for a union of 'success' | 'error' | 'loading'

type testCase = 'success' | 'error' | 'loading';
let success: testCase = 'success';
let error: testCase = 'error';
let loading: testCase = 'loading';