// Create an enum for days of the week.

enum Week {
  Monday = 1, 
  Tuesday = 2, 
  Wednesday = 3, 
  Thrusday = 4,
  Friday = 5, 
  Saturday = 6, 
  Sunday = 7
}

console.log(Week);

//assessing the string keys of the enum
console.log(Object.keys(Week).filter((val) => isNaN(Number(val)))); 

//accessing the values of the enum
console.log(Object.values(Week).filter((val) => typeof val === 'number'));