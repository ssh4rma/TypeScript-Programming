const obj : { [index: string]: number} = {};
obj.pen = 1;
obj.pencile = 4;
obj.copy = 5;

console.log(obj);

//accessing teh keys
for(let i in obj) {
  console.log(i); 
}
//accessing values
for(let i in obj) {
  console.log(obj[i]);
}