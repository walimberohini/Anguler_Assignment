import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'add',
  standalone: true
})
export class AddPipe implements PipeTransform {

  transform(value: number, num: number): unknown {
    
    return value + num;
    
  }

}
