import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppEventsService } from '../services/app-events-service/app-events.service';

@Component({
  selector: 'backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent implements OnInit, OnDestroy {
  appEventServiceSubscriber;
  showBackdrop: Boolean = false;

  constructor(private appEventsService: AppEventsService) { }

  ngOnInit() {
    this.appEventServiceSubscriber = this.appEventsService.backdropEvent;
    this.appEventServiceSubscriber.subscribe((status) => {
      this.showBackdrop = (status === 'show') ? true : false;
    });
  }

  ngOnDestroy() {
    this.appEventServiceSubscriber.unsubscribe();
  }
}
