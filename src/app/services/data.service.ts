import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TItems, TUoms } from '../types/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  http = inject(HttpClient)
  baseUrl = 'https://my-json-server.typicode.com/AleksandrSanduliak/test'

  getData() {
    const items = this.http.get<TItems[]>(`${this.baseUrl}/items`)
    const uoms = this.http.get<TUoms[]>(`${this.baseUrl}/uoms`)
    
    return {items, uoms}
  }

}
