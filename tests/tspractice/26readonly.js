"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeter = void 0;
var Greeter = /** @class */ (function () {
    function Greeter(otherName) {
        this.name = "world";
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    return Greeter;
}());
exports.Greeter = Greeter;
var g = new Greeter();
g.age = 30;
// g.name="sagar";//Cannot assign to 'name' because it is a read-only property.
console.log(g);
//readonly
// Fields may be prefixed with the readonly modifier. This prevents assignments to the field outside of the constructor.
