import { 
  Component, 
  OnInit,
  OnDestroy
} from '@angular/core';

import {
  AppEventsService
} from '../services/app-events-service/app-events.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {
  
  showAddSkill: Boolean = false;
  skills;
  skillAddedEventSubscription: Subscription;
  skillUpdatedEventSubscription: Subscription;
  slectedSkill; //skill to be selected for edit or delete

  constructor(private appEventService: AppEventsService) {}

  ngOnInit() {
    this.skillAddedEventSubscription = this.appEventService.skillAddedEvent
      .subscribe((skill) => {
        if (this.skills && this.skills.length) {
          this.skills.push(skill);
        } else {
          this.skills = [skill];
        }
      });

    this.skillUpdatedEventSubscription = this.appEventService.skillUpdatedEvent
      .subscribe((skill) => {
        this.skills[skill.index].expertiseLevel = skill.expertiseLevel;
      });
  }

  openAddSkill() {
    this.showAddSkill = true;
  }

  ngOnDestroy() {
    this.skillAddedEventSubscription.unsubscribe();
    this.skillUpdatedEventSubscription.unsubscribe();
  }
}
