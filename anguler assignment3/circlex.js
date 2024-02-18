var CircleX = /** @class */ (function () {
    function CircleX(r, pi) {
        this.radius = r;
        this.PI = pi;
    }
    CircleX.prototype.Circumference = function () {
        var Ans = 0;
        Ans = 2 * this.PI * this.radius;
        return Ans;
    };
    return CircleX;
}());
var obj1 = new CircleX(5, 3.14);
var Result = 0;
Result = obj1.Circumference();
console.log(Result);
