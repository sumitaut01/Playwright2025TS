
export{}
class test{}//empty class


//with type
class student{
    name:string;
    agent:number;

    constructor(name:string,agent:number){// constructor are named constructor
        this.name=name;
        this.agent=agent;
        console.log("constructor called");
    }
}


var student1:student=new student('sumit',23);
console.log(student1);
// constructor called
// student { name: 'sumit', agent: 23 }



//if we dont declare type then its any

class Employee{
    name;
    agent;
    constructor(name:string,agent:number){
        this.name=name;
        this.agent=agent;
    }
}


