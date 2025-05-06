class Point {
  x: number = 0;
  y: number = 0; 
  constructor(x: number, y: number);
  constructor(xy: string);
  constructor(x: string | number = 0, y : number = 0) {
    if(typeof x === 'string') {
      const[xVal, yVal] = x.split(',').map(Number);
      this.x = xVal;
      this.y = yVal;
    } else {
      this.x = x;
      this.y = y;
    }
  }
}

const pt = new Point("54,21");
console.log(`X coordinate is ${pt.x} and Y coordinate is ${pt.y}`);
