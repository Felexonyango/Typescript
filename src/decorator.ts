function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function(...args: any[]) {
      console.log(`Calling ${propertyKey} with arguments: ${args}`);
      const result = originalMethod.apply(this, args);
      console.log(`Called ${propertyKey} with result: ${result}`);
      return result;
    };
  
    return descriptor;
  }
  
  class Example {
    @logMethod
    add(a: number, b: number) {
      return a + b;
    }
  }
  
  const example = new Example();
  example.add(1, 2);
  

// example two
const printMemberName = (target: any, memberName: string) => {
  console.log(memberName);
};

class Person {
  @printMemberName
  name: string = "Jon";
}

let res = new Person()
console.log(res.name)


//decorator Functions -> it wraps function into another function with new capabilities

function examples(target:any){
  console.log('Decorator')
}

@examples
class Example1{
}
let e = new Example()

