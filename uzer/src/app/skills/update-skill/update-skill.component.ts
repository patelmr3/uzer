import { 
  fadeIn, 
  scale, 
  scaleCenter,
  slideInTop } from '../../animations';

import { 
  Component, 
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { 
  FormGroup, 
  FormControl } from '@angular/forms';

import {
  SkillsService
} from '../../services/skills-service/skills.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.scss'],
  animations: [scale, scaleCenter, fadeIn]
})
export class UpdateSkillComponent implements OnInit, OnDestroy {

  updateSkillForm: FormGroup;
  addSkillFormzIndex: Number = 105;
  currentExpertiseLevel: any;
  activatedUserId: String;

  @Input() skill;
  @Input() updateSkillModalVisible;
  
  @Output() updateSkillModalVisibleChange = new EventEmitter();
  @Output() skillUpdated = new EventEmitter();

  updateSkillSubscription = new Subscription();
  paramMapSubscription = new Subscription();

  constructor(
    private skillsService: SkillsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.updateSkillForm = new FormGroup({ });
    this.currentExpertiseLevel = this.skill.expertiseLevel;

    this.paramMapSubscription = this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.activatedUserId = paramMap.get('userId');
    });
  }

  updateSkill(formData) { 
    this.skill.expertiseLevel = this.currentExpertiseLevel;
    this.updateSkillSubscription = this.skillsService.update(this.skill, this.activatedUserId)
    .subscribe((data) => {
      console.log(data);
      this.skillsService.skillUpdatedEvent.emit(this.skill);
      this.closeUpdateSkill();
    });
  }

  closeUpdateSkill() {
    this.updateSkillModalVisible = false; //hide modal
    this.updateSkillModalVisibleChange
    .emit(this.updateSkillModalVisible); //ask modal to close
  }

  ngOnDestroy() {
    this.updateSkillSubscription.unsubscribe();
    this.paramMapSubscription.unsubscribe();
  }
}
