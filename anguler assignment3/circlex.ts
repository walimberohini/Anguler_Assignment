class CircleX 
{
  public radius : number;
  public PI : number;


  constructor(r : number,pi : number)

  {
      this.radius = r;
      this.PI = pi;

  }
  Circumference() : number
  {
    var Ans :number = 0;
    Ans = 2* this.PI *this. radius;
    return Ans;
  }
}


  var obj1 = new CircleX(5,3.14);


  var Result : number = 0;

Result = obj1.Circumference();
console.log(Result);


