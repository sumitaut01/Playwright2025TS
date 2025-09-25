

export let first:number=1;

//block scope
{

var x = 1;// has global scope and is dangerous. newer code avoids this
let y = 2;
const z = 3;
}

console.log(x); //1
//console.log(y); //error y is not defined
//console.log(z); //error z is not defined