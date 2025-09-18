var test = /** @class */ (function () {
    function test() {
    }
    return test;
}()); //empty class
//with type
var student = /** @class */ (function () {
    function student(name, agent) {
        this.name = name;
        this.agent = agent;
        console.log("constructor called");
    }
    return student;
}());
var student1 = new student('sumit', 23);
console.log(student1);
//if we dont declare type then its any
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.Employee = function (name, agent) {
        this.name = name;
        this.agent = agent;
    };
    return Employee;
}());
