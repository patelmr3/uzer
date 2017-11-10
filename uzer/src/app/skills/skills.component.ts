import { AppEventsService } from '../services/app-events-service/app-events.service';
import { Router } from '@angular/router'; 
import { fadeIn, scale, slideInTop } from '../animations';
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
  showAddSkillForm;
  skills;
  zIndex: Number = 105;

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

  addSkill(formData) {
    if(this.skills === undefined) this.skills = [];
    
    let fc = formData.controls;
    let skill = {
      skillName: fc.skillName.value,
      expertiseLevel: fc.expertiseLevel.value
    }

    this.skills.push(skill);
    this.closeAddSkill();
  }

  closeAddSkill() {
    this.addSkillForm.reset();
    this.showAddSkillForm = false
  }
}
