import { 
  Component, 
  OnInit,
  OnDestroy
} from '@angular/core';

import { SkillsService } from '../services/skills-service/skills.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { scale } from '../animations';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [scale]
})

export class SkillsComponent implements OnInit, OnDestroy {
  
  userId;
  skills: any = [];
  slectedSkill; //skill to be selected for edit or delete

  paramMapSubscription = new Subscription();
  getSkillsSubscription = new Subscription();
  deleteSkillSubscription = new Subscription();

  skillAddedEventSubscription = new Subscription(); //watch for new skill
  skillUpdatedEventSubscription = new Subscription(); //watch for skill update
  
  constructor(
    private skillsService: SkillsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.paramMapSubscription = this.activatedRoute.paramMap
    .subscribe((paramMap) => {
      this.userId = paramMap.get('userId');
      
      //get skills
      this.getSkillsSubscription = this.skillsService
      .get(this.userId)
      .subscribe((data) => {
        this.skills = data || [];
      });
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

  deleteSkill(index, skill) {
    this.deleteSkillSubscription = this.skillsService
    .delete(skill.skillName)
    .subscribe((data) => {
      console.log(data);
      this.skills.splice(index, 1);
    });
  }

  ngOnDestroy() {
    this.skillAddedEventSubscription.unsubscribe();
    this.skillUpdatedEventSubscription.unsubscribe();
    this.deleteSkillSubscription.unsubscribe();
    this.paramMapSubscription.unsubscribe();
  }
}
