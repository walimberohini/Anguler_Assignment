class Circle 
{
  public radius : number;
  public PI : 3.14;


  constructor(r : number)

  {
      this.radius = r;
      

  }
  Area() : number
  {
    var Ans :number = 0;
    Ans = 3.14*this. radius *this. radius;
    return Ans;
  }
}


  var obj1 = new Circle(5);
  var obj2 = new Circle(7);

  var Result : number = 0;

Result = obj1.Area();
console.log(Result);


Result = obj2.Area();
console.log(Result);
