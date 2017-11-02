import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UsersService{
  userCreatedEvent = new EventEmitter();

  constructor(
    private http: HttpClient
  ) { }

  insert(userData) {
    return this.http.post('http://localhost:3030/users/', userData);
  }

  select() {
    return this.http.get('http://localhost:3030/users/');
  }

  selectOne(userId) {
    return this.http.get(`http://localhost:3030/users/${userId}`);
  }

  count(){
    return (JSON.parse(window.localStorage.getItem('users'))).length; 
  }
}