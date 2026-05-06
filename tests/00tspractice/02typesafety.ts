
//avoid var as it is function scoped and can lead to unexpected behavior due to hoisting. 
// Instead, use let or const which are block scoped and provide better control over variable declarations and assignments.
// go with let or const
var user={

    firstname: "Sumit",
    age:32
}

console.log(user.age); //32
