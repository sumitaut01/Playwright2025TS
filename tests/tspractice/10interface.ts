
interface myobject{
name:String,
age:Number,
job?:String,  //optional

address:{
local:String,
office:String
}
}

//use that interface
const myobj1:myobject={
name:"sumit",
age:33,
address:{

local:"mylocal",
office:"myoffice"

}
}


const myobj2:myobject={
name:"sumit",
age:33,
job:"QA",
address:{

local:"mylocal",
office:"myoffice"

}
}


console.log(myobj1.age)

console.log(myobj1.address)

console.log(myobj2)