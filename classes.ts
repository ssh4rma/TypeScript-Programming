class Point {
  readonly x: number;
  y: number; 
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const pt = new Point(5, 4);
pt.x = 10; //will throw an error
console.log(`X coordinate is ${pt.x} and Y coordinate is ${pt.y}`);