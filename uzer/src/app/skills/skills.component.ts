import { AppEventsService } from '../services/app-events-service/app-events.service';
import { Router } from '@angular/router'; 
import { 
  fadeIn, 
  scale, 
  slideInTop } from '../animations';
import { 
  Component, 
  OnInit, 
  ElementRef } from '@angular/core';
import { 
  FormGroup, 
  FormControl } from '@angular/forms';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [fadeIn, scale, slideInTop]
})
export class SkillsComponent implements OnInit {
  addSkillForm;
  showAddSkillForm: Boolean;
  showSuggestedSkills: Boolean;
  addSkillFormzIndex: Number = 105;
  skills;

  suggestedSkills = [
    'HTML', 
    'CSS', 
    'JavaScript',
    'jQuery',
    'Angular', 
    'ReactJs', 
    'NodeJs', 
    'MongoDb', 
    'ExpressJs', 
    'PHP', 
    'MySQL'
  ];

  expertiseLevels = [
    {name: 'No Skills', color: '#F44336'},
    {name: 'Beginner', color: '#E91E63'},
    {name: 'Intermediate', color: '#9C27B0'},
    {name: 'Proficiant', color: '#2196F3'},
    {name: 'Expert', color: '#4CAF50'},
  ];

  currentExpertiseLevel = this.expertiseLevels[2];

  constructor(
    private appEventsService: AppEventsService,
    private elementRef: ElementRef,
    private router: Router
  ) { }

  ngOnInit() {
    this.addSkillForm = new FormGroup({
      'skillName': new FormControl('', []),
      'expertiseLevel': new FormControl('', [])
    });
  }

  openAddSkill() {
    this.showAddSkillForm = true;
  }

  selectSuggestion(skill) {
    this.addSkillForm.controls["skillName"].setValue(skill);
  }

  x = 0;

  onExpertiseLevelChange(lvl) {
    if (lvl > 0 && lvl <= 25) {
      this.currentExpertiseLevel = this.expertiseLevels[1];
      this.currentExpertiseLevel['subLevel'] = ((lvl - 1) * 100) / 24;
    } else if (lvl > 25 && lvl <= 50) {
      this.currentExpertiseLevel = this.expertiseLevels[2];
      this.currentExpertiseLevel['subLevel'] = ((lvl - 26) * 100) / 24;
    } else if (lvl > 50 && lvl <= 75) {
      this.currentExpertiseLevel = this.expertiseLevels[3];
      this.currentExpertiseLevel['subLevel'] = ((lvl - 51) * 100) / 24;
    } else if (lvl > 75 && lvl <= 100) {
      this.currentExpertiseLevel = this.expertiseLevels[4];
      this.currentExpertiseLevel['subLevel'] = ((lvl - 76) * 100) / 24;
    } else {
      this.currentExpertiseLevel = this.expertiseLevels[0];
    }
  }

  addSkill(formData) {
    if(this.skills === undefined) this.skills = [];
    
    let fc = formData.controls;
    let skill = {
      skillName: fc.skillName.value,
      expertiseLevel: fc.expertiseLevel.value,
      expertiseLevelName: function() {
        if(this.expertiseLevel > 0 && this.expertiseLevel) {

        }
      }
    }

    this.skills.push(skill);
    this.closeAddSkill();
  }

  closeAddSkill() {
    this.addSkillForm.reset();
    this.showAddSkillForm = false;
    this.showSuggestedSkills = false;
  }
}
