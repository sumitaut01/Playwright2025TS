
//1 Optional Parameter

//Normal
function getInfo(firstname:String,age:number):String{
    return firstname+"" +age;
}


//? makes that optinal
function getInfoOptional(firstname:String,age?:number):String{
    return firstname+" " +age;
}

console.log(getInfoOptional('Sumit',35));//Sumit 35
console.log(getInfoOptional('Sumit'));//Sumit undefined



//2 Default Paramter
function getInfoDefault(firstname:String,age:number=35):String{
    return firstname+" " +age;
}

console.log( getInfoDefault("Sumit"));//allowed
console.log( getInfoDefault("Sumit",undefined));// will still use default