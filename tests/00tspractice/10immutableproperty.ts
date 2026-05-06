
//IMMUTABLE PROPERTY example is shown below where we have defined an interface with a 
// readonly property and then we are trying to change the value of that property which will give us an error as 
// it is read-only and cannot be modified after it has been initialized.

interface dd{
    readonly dept:Number,
    deptname:String
}


const dd:dd={

    dept:10,
    deptname:"IT"
}

console.log(dd)

dd.deptname="NowQA";
console.log(dd)

//dd.dept=12;//Cannot assign to 'dept' because it is a read-only property.
console.log(dd)



