

// kinda of philosophical question
// what is the return type of a function that never returns?
// it can be because it always throws an error
// or because it has an infinite loop



function testNeverType(msg:string):never {
    console.log(msg);
    throw new Error("msg");
}

testNeverType("hi"); //