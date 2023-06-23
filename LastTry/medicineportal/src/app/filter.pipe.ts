import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(medicines1: any[], searchText: string): any[] {
    if (!medicines1) return [];
    if (!searchText) return medicines1;
    searchText = searchText.toLowerCase();
    return medicines1.filter( it => {
      return it.name.toLowerCase().includes(searchText);
    });
  }

}


