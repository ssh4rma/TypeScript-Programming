//function to add 2 numbers
function addNums(a, b): number {
  return a + b;
}

console.log(addNums(2, 3));

const names: string[] = ['s', 'h', 'u', 'b', 'h', 'a', 'm'];
console.log(names); 
for(let i : number = 0; i < names.length; ++i) {
  console.log(names[i]);
}

const charArr: readonly string[] =  ['you', 'can', 'only', 'read', 'this'];
console.log(charArr);

for(let i : number = 0; i < charArr.length; ++i) {
    console.log(charArr[i]);
}