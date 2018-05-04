import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBy'
})
export class SearchByPipe implements PipeTransform {

   transform(value: any, args?: any[]): any {     
      if (value.length !== 0) {       
        return value.filter((item) => item.firstName.startsWith(args));     
      } else {       
        return value.filter((item) => item);    
      } 
    };
}
