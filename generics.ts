function fn<T>(value: T): T {
  return value;
}

const num = fn(5);
console.log(num); 
console.log(typeof num);
const str = fn('str');
console.log(str); 
console.log(typeof str);