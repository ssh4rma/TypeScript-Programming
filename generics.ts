function fn<T>(value: T): T {
  return value;
}

const num = fn(5);
console.log(num); 
const str = fn('str');
console.log(str); 