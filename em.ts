class Point {
  _x: number; 
  _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y; 
  }

  @configurable(false) 
  get x() {
    return this._x;
  }

  @configurable(false) 
  get y() {
    return this._y;
  }
} 

function configurable(value: boolean) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.configurable = value;
  };
}

const pt = new Point(5, 10);

// Correct way to inspect the descriptor of a getter
console.log(Object.getOwnPropertyDescriptor(Point.prototype, 'x'));