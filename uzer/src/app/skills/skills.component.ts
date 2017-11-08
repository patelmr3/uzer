import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  addSkillForm;
  showAddSkillForm
  skills;

  constructor() { }

  ngOnInit() {
    this.addSkillForm = new FormGroup({
      'skillName': new FormControl('', []),
      'expertiseLevel': new FormControl('0', [])
    });
  }

  addSkill(formData) {
    if(this.skills === undefined) this.skills = [];
    
    let fc = formData.controls;
    let skill = {
      skillName: fc.skillName.value,
      expertiseLevel: fc.expertiseLevel.value
    }
    this.skills.push(skill);
    this.showAddSkillForm = false;
    this.addSkillForm.reset();
  }
}
