import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
 {
  public Name : string = "";
  public Name1 : string = "";
  
  public upperEvent()
  {
   this .Name = " Marvellous Infosyatem ";
  }
  public lowerEvent()
  {
   this .Name1 = "Marvellous Infosyatem ";
  }
}
