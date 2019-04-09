import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter',
  pure: true
})
export class CarFilterPipe implements PipeTransform {
  transform(carList, search: string, fieldName: string): any {
    console.log(carList, search);
    if (!carList || !search || search.length === 0 ) {
        return carList;
    }

    return carList.filter((car) => car[fieldName].toLowerCase().indexOf(search.toLowerCase()) !== -1 );
    // return carList;
  }

}
