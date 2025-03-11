import { Pipe, PipeTransform } from '@angular/core';


@Pipe(  { 
     name: 'revers'
})
export class ReversPipePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return value.split('').reverse().join('');
  }

}
