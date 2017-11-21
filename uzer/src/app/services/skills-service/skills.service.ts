import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SkillsService {

  skillAddedEvent = new EventEmitter();
  skillUpdatedEvent = new EventEmitter();

  constructor() { }

  add(skill) {

    
    this.skillAddedEvent.emit(skill);
  }

  update(skill) {
    this.skillUpdatedEvent.emit(skill);
  }
}
