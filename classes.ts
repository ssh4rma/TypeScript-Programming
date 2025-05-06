class Point {
  x: number;
  constructor(x) {
    this.x = x;
  }
}

const pt = new Point(5);
console.log(`X coordinate is ${pt.x} and Y coordinate is ${pt.y}`);