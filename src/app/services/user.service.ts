import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  #http = inject(HttpClient);
  users$ = this.#http.get<User[]>(`https://jsonplaceholder.typicode.com/users`);


  constructor() { }
  profile(id: string | number) {
    return this.#http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);

  }
}
