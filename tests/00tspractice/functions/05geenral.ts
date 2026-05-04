
//1
function first(a:number,b:number):number
{
    return a+b;
}

console.log(first(10,20));
//2
let second=function add(a:number,b:number):number
{
    return a+b;
}
console.log(second(10,20));
//add(2,3);  // this will not work as add is not defined in global scope, it is only defined in the function scope of second


//3 
let x =()=>console.log("run")
x();


//4
let result=()=>4>5;
console.log(result()); // this will return false as 4 is not greater than 5


//5 returning an object from an arrow function
let getObject=()=>({name:"John",age:30});
console.log(getObject()); // this will return the object {name: "John", age: 30}

//6 returning a funnction from a function
function outerFunction()
{
    return function innerFunction() {
        console.log("This is the inner function");
    }       
}   
let inner=outerFunction();
inner(); // this will call the inner function and print "This is the inner function"


