import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://api.helsingborg.se/event/json/wp/v2/event/';
  constructor(private _http: HttpClient) { }
getUsers() {
  return this._http.get<User[]>(this.apiUrl);
}
}
