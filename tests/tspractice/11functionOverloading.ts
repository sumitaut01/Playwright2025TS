//not posssible in javascript
//possible in ts
//parameters number shud be same


//decalare body
function display(st:String):String;
function display(age:number):number;


//implement with any
function display(a:any):any{
    return a;
}


let s1=display(1);
let s2=display('Sumit');