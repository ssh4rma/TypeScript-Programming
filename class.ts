class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}

class coordinates extends Point {
  z: number;

  constructor(x: number, y: number, z: number) {
    super(x, y); // Pass x, y to Point
    this.z = z;
  }
}

// Test
const c1 = new coordinates(10, 20, 30);
console.log(`${c1.x} and ${c1.y} and ${c1.z}`); // Output: 10 and 20 and 30
c1.scale(5);
console.log(`${c1.x} and ${c1.y} and ${c1.z}`); // Output: 50 and 100 and 30