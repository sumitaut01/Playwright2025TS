function first(second) {
    console.log("calling firrst function");
    second();
}
function somename() {
    console.log("Hello World");
    console.log("I am from somename function");
}
first(somename);
// calling firrst function
// Hello World
// I am from somename function
