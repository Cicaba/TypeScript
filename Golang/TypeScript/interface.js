"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Debug = (function () {
    function Debug() {
    }
    Debug.prototype.log = function () {
        console.log('====================================');
        console.log(this);
        console.log('====================================');
        return this;
    };
    Debug.prototype.debug = function () {
        debugger;
        return this;
    };
    return Debug;
}());
var Test = (function (_super) {
    __extends(Test, _super);
    function Test(firstName, lastName) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.age = 18;
        _this.test = '哦豁';
        return _this;
    }
    return Test;
}(Debug));
new Test('(ˇ?ˇ) 想～', '(☄⊙ω⊙)☄').log();
console.log(0);
exports.default = Debug;
//# sourceMappingURL=interface.js.map