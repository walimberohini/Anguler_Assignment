
 
  
    function Area() : number
     {
        var Result :number = 0;
        Result = (pi * r * r);
        return Result;
    }    
    var r : number  = 5;
    var pi :number = 3.14;
    var area : number = 0;
    area = Area();
    console.log("Area of Circle is: " + area);