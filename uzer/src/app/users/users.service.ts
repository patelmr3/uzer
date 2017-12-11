import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UsersService {
  userCreatedEvent = new EventEmitter();
  userLoggedInEvent = new EventEmitter();

  API = 'http://localhost:3030'; //API url

  constructor(private http: HttpClient) { }

  //login
  login(formData) {
    return this.http.post(`${this.API}/login`, formData);
  }

  //insert user
  insert(userData) {
    return this.http.post(`${this.API}/users/`, userData);
  }

  //get all users
  getUsers(filters, callback) {
    this.http.get(`${this.API}/users?filters=${JSON.stringify(filters)}`).subscribe(users => {
      callback(users);
    });
  }

  //select one user
  selectOne(userId) {
    return this.http.get(`${this.API}/users/${userId}`);
  }

  getCities(callback) {
    this.http.get(`${this.API}/cities`).subscribe((cities) => {
      callback(cities);
    });
  }

  //count users
  count() {
    return this.http.get(`${this.API}`);
  }

  //emit event when new user is created
  emitUserCreated() {
    this.userCreatedEvent.emit();
  }

  //emit event when new user is logedIn
  emitUserLoggedIn(data) {
    this.userLoggedInEvent.emit(data);
  }
}