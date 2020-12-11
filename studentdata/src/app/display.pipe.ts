import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'display'
})
export class DisplayPipe implements PipeTransform {

  transform(value: number){
    if(value >= 70)
      return 'First class';
    else if(value>=35 && value<70)
      return 'Passed';
    else
      return 'Failed';
  }

}
