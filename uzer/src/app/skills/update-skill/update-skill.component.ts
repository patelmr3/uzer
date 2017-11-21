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

@Component({
  selector: 'update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.scss'],
  animations: [scale, scaleCenter, fadeIn]
})
export class UpdateSkillComponent implements OnInit {

  constructor(private skillsService: SkillsService) { }

  updateSkillForm;
  addSkillFormzIndex: Number = 105;
  currentExpertiseLevel;

  @Input() skill;
  @Input() updateSkillModalVisible;
  
  @Output() updateSkillModalVisibleChange = new EventEmitter();
  @Output() skillUpdated = new EventEmitter();

  ngOnInit() {
    //initialize form group & form control
    this.updateSkillForm = new FormGroup({

    });
    this.currentExpertiseLevel = this.skill.expertiseLevel;
  }

  updateSkill(formData) { 
    this.skill.expertiseLevel = this.currentExpertiseLevel;
    //emit event when new skill is added
    this.skillsService.update(this.skill);
    this.closeUpdateSkill();
  }

  closeUpdateSkill() {
    this.updateSkillModalVisible = false; //hide modal
    this.updateSkillModalVisibleChange
      .emit(this.updateSkillModalVisible); //ask modal to close
  }
}
