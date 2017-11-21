import { 
  Component, 
  OnInit,
  OnDestroy
} from '@angular/core';

import { SkillsService } from '../services/skills-service/skills.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent implements OnInit, OnDestroy {
  
  skills: any = [];
  getSkillsSubscription: Subscription;
  skillAddedEventSubscription: Subscription; //watch for new skill
  skillUpdatedEventSubscription: Subscription; //watch for skill update
  slectedSkill; //skill to be selected for edit or delete

  constructor(
    private skillsService: SkillsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let userId = this.activatedRoute.snapshot.paramMap.get('userId');
    //get skills
    this.getSkillsSubscription = this.skillsService.get(userId).subscribe((data) => {
      console.log(data);
      this.skills = data || [];
    });

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
    this.skillAddedEventSubscription.unsubscribe();
    this.skillUpdatedEventSubscription.unsubscribe();
  }
}
