class Arithematic 
{
  public No1 : number;
  public No2 : number;


  constructor(A : number,B : number)

  {
      this.No1 = A;
      this.No2 = B;

  }

  Addition() : number
  {
    var Ans : number;
    Ans = this.No1 + this.No2;
    return Ans;
  }


  Substraction() : number
  {
    var Ans : number;
    Ans = this.No1 - this.No2;
    return Ans;
  }
  multiplication() : number
  {
    var Ans : number;
    Ans = this.No1 * this.No2;
    return Ans;
  }
  division() : number
  {
    var Ans : number;
    Ans = this.No1 / this.No2;
    return Ans;
  }
}

var obj1 = new Arithematic (15,10);
var obj2 = new Arithematic (25,21);




var Result : number = 0;

Result = obj1.Addition();
console.log(Result);

Result = obj2.Substraction();
console.log(Result);

Result = obj1.multiplication();
console.log(Result);

Result = obj2.division();
console.log(Result);