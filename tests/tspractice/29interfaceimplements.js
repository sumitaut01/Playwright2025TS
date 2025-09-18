var Sonar = /** @class */ (function () {
    function Sonar() {
    }
    Sonar.prototype.ping = function () {
        console.log("ping!");
    };
    return Sonar;
}());
var x = new Sonar();
console.log(x.ping());
var NameChecker = /** @class */ (function () {
    function NameChecker() {
    }
    NameChecker.prototype.check = function (s) {
        //Parameter 's' implicitly has an 'any' type.
        // Notice no error here
        return s.toLowerCase() === "ok";
    };
    return NameChecker;
}());
var y = new NameChecker();
console.log(y.check("sumit"));
//ping!
//undefined
//false
