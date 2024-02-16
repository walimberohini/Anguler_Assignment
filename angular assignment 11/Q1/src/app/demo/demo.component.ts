import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers : [ArithmeticService]
})
export class DemoComponent
 {
   public add : any = [];
   public sub : any = [];
   constructor(private obj :ArithmeticService,private obj1 :ArithmeticService)
   {
      this.add = obj.GetAddition();
      this.sub = obj1.GetSubtraction();
   }
   

   

}
