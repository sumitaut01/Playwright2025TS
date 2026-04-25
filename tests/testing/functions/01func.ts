
//1
function sum(a:number,b:number){
    return a+b;
}

console.log(sum(2,2)) //tsx tests\testing\functions\01func.ts =>4

//2 Still valid 
let sumvar=function(a:number,b:number){
    return a+b;
}
console.log(sumvar(5,5));//10



//2 Still valid 
let sumvar2=function sum2(a:number,b:number){
    return a+b;
}

//console.log(sum2(2,3)); //not allowed