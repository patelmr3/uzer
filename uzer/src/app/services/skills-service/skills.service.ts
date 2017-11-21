import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SkillsService {

  skillAddedEvent = new EventEmitter();
  skillUpdatedEvent = new EventEmitter();

  API = 'http://localhost:3030'; //API url
  loggedInUser;

  constructor(private http: HttpClient) { 
    this.loggedInUser = JSON.parse(window.sessionStorage.getItem('loggedInUser'));
  }

  get(userId) {
    let id = userId;
    return this.http.get(`${this.API}/users/${id}/skills`);
  }

  add(skill) {
    return this.http.post(`${this.API}/users/${this.loggedInUser._id}/skills`, skill);
  }

  update(skill) {
    return this.http.put(`${this.API}/users/${this.loggedInUser._id}/skills`, skill);
  }
}
