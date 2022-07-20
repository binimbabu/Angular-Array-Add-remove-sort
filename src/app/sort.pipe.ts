import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, key: string): any {
    return value.sort((val1:any, val2:any) => {
      if(val1[key] > val2[key]){
        return 1;
      }else if(val1[key] < val2[key]){
        return -1;
      }else{
        return 0;
      }
    })
  }
}
