import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from './food.module';

@Injectable({
  providedIn: 'root'
})
export class MatService {
  apirl = 'https://foodws-yonit.herokuapp.com/get-recipes';
  constructor(private _http: HttpClient) { }
getUsers() {
  return this._http.get<Food[]>(this.apirl);
}
}
