
// employee  salary  id 

//1 object type-- 'onject' is non primitive data type

let employee:object={
    name:'John',
    age:30,
 
}   

//with below style we can add methods
let employee1: {
    name: string,
    age: number,
    getDetails: () => string
};

// Example assignment with implementation:
employee1 = {
    name: 'John',
    age: 30,
    getDetails: function() {
        return `${this.name} is ${this.age} years old`;
    }
};



console.log(employee1.name);
console.log(employee1["name"]);

//using type aliases


type Employee3={
    name:string,
    age:number,
  
};

let emp:Employee3={
    name:'John',
    age:30, 


//using class
