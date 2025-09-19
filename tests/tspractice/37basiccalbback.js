//Basic
function demo(name, callback) {
    console.log("hi " + name);
    callback();
}
function welcome() {
    console.log("Welcome brother");
}
demo("sumit", welcome);
//hi sumit
//Welcome brother
//2Asyn
function newfunc(name, callback) {
    setTimeout(function () {
        console.log(name);
    }, 3000);
    console.log("hi " + name);
    callback("some text");
}
function some(msg) {
    console.log("Welcome brother");
}
newfunc("Neha", some);
