var Circle = /** @class */ (function () {
    function Circle(r) {
        this.radius = r;
    }
    Circle.prototype.Area = function () {
        var Ans = 0;
        Ans = 3.14 * this.radius * this.radius;
        return Ans;
    };
    return Circle;
}());
var obj1 = new Circle(5);
var obj2 = new Circle(7);
var Result = 0;
Result = obj1.Area();
console.log(Result);
Result = obj2.Area();
console.log(Result);
