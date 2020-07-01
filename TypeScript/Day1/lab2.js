var Person = /** @class */ (function () {
    function Person() {
        var _this = this;
        this.firstName = "";
        this.lastName = "";
        this.sayHi = function () { return "Hi " + _this.firstName + " " + _this.lastName; };
    }
    return Person;
}());
