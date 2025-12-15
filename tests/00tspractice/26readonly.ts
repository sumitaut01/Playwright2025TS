export class Greeter {
  readonly name: string = "world";
  age:number;
 
  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }
}

  
  const g=new Greeter();

  g.age=30;
 // g.name="sagar";//Cannot assign to 'name' because it is a read-only property.

  console.log(g);//Greeter { name: 'world', age: 30 }

  //readonly
// Fields may be prefixed with the readonly modifier. This prevents assignments to the field 
// outside of the constructor.