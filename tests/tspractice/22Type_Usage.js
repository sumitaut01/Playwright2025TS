function func1(x) {
    if (typeof x === 'number') {
        console.log("number");
    }
    else if (typeof x === 'string') {
        console.log("String");
    }
}
func1(2);
func1('sagar');
function func2(y) {
    console.log(y.age);
    console.log(y.name);
}
func2({ age: 35, name: "Sumit" });
