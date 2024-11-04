import { Pipe, PipeTransform } from '@angular/core';
import { TData } from '../types/data';

@Pipe({
  name: 'filterTable',
  standalone: true
})
export class FilterTablePipe implements PipeTransform {

  transform(items: TData[], searchText: string) : TData[] {
    if (!items) return [];
    if (!searchText) return items;
    
    searchText = searchText.toLocaleLowerCase();

    return items.filter(item => Object.keys(item).some(key => String(item[key as keyof TData]).toLowerCase().includes(searchText)));
  }
}
