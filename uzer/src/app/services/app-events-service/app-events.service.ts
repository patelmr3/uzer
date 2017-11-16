import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AppEventsService {

  skillAddedEvent = new EventEmitter();
  skillUpdatedEvent = new EventEmitter();

  constructor() { }

  skillAdded(skill) {
    this.skillAddedEvent.emit(skill);
  }

  skillUpdated(skill) {
    this.skillUpdatedEvent.emit(skill);
  }
}
