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