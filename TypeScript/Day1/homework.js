// 3 classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ComScreen = /** @class */ (function () {
    function ComScreen() {
        this.resolution = [1920, 1024];
        this.size = 32;
        this.brand = "Asus";
    }
    return ComScreen;
}());
var Computer = /** @class */ (function (_super) {
    __extends(Computer, _super);
    function Computer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cpu = "i5";
        _this.ram = 8;
        _this.drive = { type: "SSD", volumn: 526 };
        return _this;
    }
    return Computer;
}(ComScreen));
var WorkStation = /** @class */ (function (_super) {
    __extends(WorkStation, _super);
    function WorkStation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speaker = false;
        _this.mouse = true;
        _this.keyboard = true;
        return _this;
    }
    return WorkStation;
}(Computer));
// 3 functions
function draw(vertexX, vertexY, callback) {
    return callback(vertexX * vertexY);
}
function render(vertex, callback) {
    return callback(vertex);
}
draw(24, 32, function (z) {
    render(z, function (x) {
        console.log("Draw " + x + " vertex");
    });
});
