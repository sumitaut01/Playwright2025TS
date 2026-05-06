
// varibale type in typescript CAN be explicitly defined by the developer or can be inferred by the compiler based on the assigned value.
// Type annotations are used to explicitly specify the type of a variable, function parameter, or function return value. 
// This helps catch type-related errors during development and provides better code readability and maintainability.    


//Use lowercase types (string, number, boolean) instead of their object wrappers (String, Number, Boolean).
let x:number=20;

let y:String="sumit";//use string

let z:null=null;

export let a:undefined=undefined;

let b:any=20;
b="String";
b={somevalue:"sumit"};


//void
function random():void{
    console.log("nothing");
}

function random2():void{
    console.log("nothing");
    return;
}

function random3():any{
    console.log("nothing");
    return 3;
}

function random4():any{
    console.log("nothing");
    return "any";
}