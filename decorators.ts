function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}
 
function second() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called");
  };
}
 
class ExampleClass {
  @first()
  @second()
  method() {}
}

//class decorator
@reportableClassDecorator
class BugReport {
  type = 'report'; 
  title: string; 

  constructor(t: string) {
    this.title = t;
  }
}

function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

function reportableClassDecorator<T extends {new (...args: any[]): {}}> (constructor: T) {
  return class extends constructor {
    reportingURL = 'https://www...';
  };
}

const bug = new BugReport("Issue #123");
console.log(bug.type); 
console.log(bug.reportingURL);

//method decorators
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message; 
  }

  @enumerable(false)
  greet() {
    return `Hello User ${this.greeting}`;
  }
}

function enumerable (value: boolean) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable  = value; 
  };
}

const g = new Greeter('this is shubham');
console.log(g.greet()); 
console.log(Object.getOwnPropertyDescriptors(g.greet()));

//accessor decorator
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

  @configurable(true) 
  get y() {
    return this._y;
  }
} 

function configurable(value: boolean) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.configurable(value);
  }
}

//Property decorator
class Greeter2 {
  @format('Hello, %s')
  greeting: string; 

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    let formatString = getFormat(this, 'greeting');
    return formatString.replace('%s', this.greeting);
  }
}

import "reflect-metadata";
const formatMetaDataKey = Symbol("format");

function format(formatString: string) {
  return Reflect.metadata(formatMetaDataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetaDataKey, target, propertyKey);
}