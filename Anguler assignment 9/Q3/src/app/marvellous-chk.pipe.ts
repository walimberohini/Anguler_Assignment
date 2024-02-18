import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): any {
    if(value%2 == 0)
    {
    return "number is even"
    }
    else {
      return "it is not a even "

    }

  
  
   
  }

 
    
  }
  

