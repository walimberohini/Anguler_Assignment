import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
// import classes which are required for reactive forms
import {FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : [FormBuilder,Validators]
})
export class AppComponent {
  constructor(public fbobj : FormBuilder)
  {
  }
  
  MarvellousForm = this.fbobj.group(
    {
      // Add Multiple validations
      Fname :['', [Validators.required] ],
      Lname :['', [Validators.required] ],
      email :['', [Validators.required,Validators.email] ],
      phone :['', [Validators.required, Validators.minLength(10)] ],
      address :['', [Validators.required, Validators.minLength(5)] ],
      city :['', [Validators.required, Validators.minLength(4)] ],
      state :['', [Validators.required, Validators.minLength(4)] ],
      zipcode :['', [Validators.required, Validators.minLength(5)] ],
      Comments :['', [Validators.required, Validators.minLength(30)] ],
    

     
   
    }
  );
  
}
