//1 named functions
function myFunc(bae:string):void
{
    console.log(bae);
}
//myFunc("sumit");


//with variable parametr
function myFuncVariableParams(...nums:string[]):void
{


}


//with variable parametr
function myFuncVariableParamsDifferent(...nums:(number|string)[]):void
{


}



//with variable parametr
function myFuncVariableOptional(name:string,age?:number):void
{

// even if we dont pass age, it ill work. it will be printed as undefined if printed
}



function myFuncVariableDefaultParam(name:string,age:number=10):void
{

//age will have default 10
}


//2 anonyms




//