import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UsersService{
  userCreatedEvent = new EventEmitter();
  API = 'http://localhost:3030'; //API url

  constructor(private http: HttpClient) { }

  //insert user
  insert(userData) {
    return this.http.post(`${this.API}/users/`, userData);
  }
  //select all users
  select() {
    return this.http.get(`${this.API}/users/`);
  }
  //select one user
  selectOne(userId) {
    return this.http.get(`${this.API}/users/${userId}`);
  }
  //count users
  count(){
    return this.http.get(`${this.API}`); 
  }

  //emit event when new user is created
  emitUserCreated() {
    this.userCreatedEvent.emit();
  }
}