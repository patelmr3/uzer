import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AppEventsService {
  backdropEvent = new EventEmitter;

  constructor() { }

  toggleBackdrop(data) {
    this.backdropEvent.emit(data)
  }
}
