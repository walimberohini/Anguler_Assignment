var Arithematic = /** @class */ (function () {
    function Arithematic(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithematic.prototype.Addition = function () {
        var Ans;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithematic.prototype.Substraction = function () {
        var Ans;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    Arithematic.prototype.multiplication = function () {
        var Ans;
        Ans = this.No1 * this.No2;
        return Ans;
    };
    Arithematic.prototype.division = function () {
        var Ans;
        Ans = this.No1 / this.No2;
        return Ans;
    };
    return Arithematic;
}());
var obj1 = new Arithematic(15, 10);
var obj2 = new Arithematic(25, 21);
var Result = 0;
Result = obj1.Addition();
console.log(Result);
Result = obj2.Substraction();
console.log(Result);
Result = obj1.multiplication();
console.log(Result);
Result = obj2.division();
console.log(Result);
