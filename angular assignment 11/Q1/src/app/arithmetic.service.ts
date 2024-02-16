import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }
  GetAddition()
  {
    return[
      {"num1" : 20,"num2" : 10}
    ];
  }

  GetSubtraction()
  {
    return[
      {"num1" : 20,"num2" : 10}
    ];
  }
}
