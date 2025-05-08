class Point {
  x: number = 10;
  y: number = 20;

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}

const p1 = new Point();
console.log(`${p1.x} and ${p1.y}`); 
p1.scale(5);
console.log(`${p1.x} and ${p1.y}`); 

