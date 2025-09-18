

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



