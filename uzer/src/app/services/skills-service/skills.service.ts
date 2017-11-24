import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class SkillsService {

  skillAddedEvent = new EventEmitter();
  skillUpdatedEvent = new EventEmitter();

  API: String = 'http://localhost:3030'; 
  loggedInUser: String;
  activatedUserId: String;

  paramMapSubscription = new Subscription();

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { 
    this.loggedInUser = JSON.parse(window.sessionStorage.getItem('loggedInUser'));
  }

  get(userId) {
    return this.http.get(`${this.API}/users/${userId}/skills`);
  }

  add(skill, userId) {
    return this.http.post(`${this.API}/users/${userId}/skills`, skill);
  }

  update(skill, userId) {
    return this.http.put(`${this.API}/users/${userId}/skills`, skill);
  }

  delete(skillName, userId) {
    return this.http.delete(`${this.API}/users/${userId}/skills/${skillName}`);
  }
}
