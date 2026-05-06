
//unline java interface in typescript is more like a blueprint for an object which defines the structure of the object
//  and the types of the properties and methods that the object should have.

// you might think that types and interfaces are same but there are some differences between them which we will see in the next file
//key difference is that interfaces can be extended and implemented by classes while types cannot be extended or implemented.
// interfaces are more flexible and can be used to define the shape of an object, while types are more rigid and are used to define a specific type of value.
    

interface myobject {
    name: String,
    age: Number,
    job?: String,  //optional

    address: {
        local: String,
        office: String
    }
}

//use that interface
const myobj1: myobject = {
    name: "sumit",
    age: 33,
    address: {

        local: "mylocal",
        office: "myoffice"

    }
}


const myobj2: myobject = {
    name: "sumit",
    age: 33,
    job: "QA",
    address: {

        local: "mylocal",
        office: "myoffice"

    }
}


console.log(myobj1.age)

console.log(myobj1.address)

console.log(myobj2)