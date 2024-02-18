import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';


@Component({
  selector: 'app-bug-info',
  standalone: true,
  imports: [MatInputModule,MatDatepickerModule,MatFormFieldModule,MatNativeDateModule],
  templateUrl: './bug-info.component.html',
  styleUrl: './bug-info.component.css'
})
export class BugInfoComponent {

}
