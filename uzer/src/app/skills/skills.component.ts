import { 
  Component, 
  OnInit,
  OnDestroy
} from '@angular/core';

import { SkillsService } from '../services/skills-service/skills.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent implements OnInit, OnDestroy {
  
  skills = [];
  skillAddedEventSubscription: Subscription; //watch for new skill
  skillUpdatedEventSubscription: Subscription; //watch for skill update
  slectedSkill; //skill to be selected for edit or delete

  constructor(private skillsService: SkillsService) {}

  ngOnInit() {
    //subscrive to event: skill added
    this.skillAddedEventSubscription = this.skillsService.skillAddedEvent
      .subscribe((skill) => {
        this.skills.push(skill); //push new skill to skills array
      });

    //subscribe to event: skill updated
    this.skillUpdatedEventSubscription = this.skillsService.skillUpdatedEvent
      .subscribe((skill) => {
        this.skills[skill.index].expertiseLevel = skill.expertiseLevel;
      });
  }

  deleteSkill(index) {
    this.skills.splice(index, 1);
  }

  ngOnDestroy() {
    //unsubscribe to all the events
    this.skillAddedEventSubscription.unsubscribe();
    this.skillUpdatedEventSubscription.unsubscribe();
  }
}
