import { 
  fadeIn, 
  scale, 
  scaleCenter,
  slideInTop } from '../../animations';

import { 
  Component, 
  OnInit,
  Input,
  Output,
  EventEmitter } from '@angular/core';

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
export class UpdateSkillComponent implements OnInit {

  updateSkillForm;
  addSkillFormzIndex: Number = 105;
  currentExpertiseLevel;

  @Input() skill;
  @Input() updateSkillModalVisible;
  
  @Output() updateSkillModalVisibleChange = new EventEmitter();
  @Output() skillUpdated = new EventEmitter();

  updateSkillSubscription: Subscription;

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    //initialize form group & form control
    this.updateSkillForm = new FormGroup({ });
    this.currentExpertiseLevel = this.skill.expertiseLevel;
  }

  updateSkill(formData) { 
    this.skill.expertiseLevel = this.currentExpertiseLevel;
    this.updateSkillSubscription = this.skillsService.update(this.skill)
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
}
