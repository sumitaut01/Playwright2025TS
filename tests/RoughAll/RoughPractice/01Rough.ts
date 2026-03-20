const name_new="sumit";
console.log(`the name is ${name_new}`);
//PS D:\SeleniumFrameWorks\GitHubSumitraut01\Playright2025TS> tsx tests\RoughAll\RoughPractice\01Rough.ts
//the name is sumit

console.log(typeof name_new); //string


//array ...list

const arr_new:string[]=["sumit","kumar","singh"];
arr_new.push("sumit");
console.log(arr_new); // [ 'sumit', 'kumar', 'singh', 'sumit' ]
console.log(typeof arr_new); //object



const data=Array<string>();
data.push("sumit");
console.log(data); //[ 'sumit' ]


//type




//interface
interface User{
    name:string;
    age:number;
    isAdmin:boolean;

    run():void;

}


class Userx implements User{


const idata:User={
    name: "sumit",
    age: 30,
    run(): void {
        console.log("running");
    },
    isAdmin: false
    
}










//class




//function












