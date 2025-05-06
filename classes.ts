class Point {
  x: number;
  y: number; 
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

const pt = new Point();
console.log(`X coordinate is ${pt.x} and Y coordinate is ${pt.y}`);
