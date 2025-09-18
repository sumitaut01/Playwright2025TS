//Normal function
 function sum1(a:number,b:number):number{
    return a+b;
}

//
async function sum2(a:number,b:number):Promise<number>{
    return a+b;
}


async function sum3(a:number,b:number):Promise<number>{
return a+b;
} 

console.log(sum1(2,3));//5
console.log(sum2(2,3));// Promise {5}
sum3(2,3).then(console.log)//5



