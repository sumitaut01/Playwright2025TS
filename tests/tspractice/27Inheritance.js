"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.parent = void 0;
var parent = /** @class */ (function () {
    function parent() {
        this.id = 4;
    }
    return parent;
}());
exports.parent = parent;
var child = /** @class */ (function (_super) {
    __extends(child, _super);
    function child() {
        var _this = _super.call(this) || this; // if we dont use it then ts will give error 
        console.log("inside child const");
        return _this;
    }
    return child;
}(parent));
var cc = new child();
