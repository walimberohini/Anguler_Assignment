import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sub',
  standalone: true
})
export class SubPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
