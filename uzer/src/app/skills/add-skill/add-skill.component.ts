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

import { SkillsService } from '../../services/skills-service/skills.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss'],
  animations: [scale, scaleCenter, fadeIn]
})
export class AddSkillComponent implements OnInit {

  constructor(private skillsService: SkillsService) { }

  addSkillForm;
  showSuggestedSkills: Boolean;
  addSkillFormzIndex: Number = 105;
  currentExpertiseLevel = {};

  addSkillSubscription: Subscription;
  updateSkillSubscription: Subscription;

  @Input() addSkillModalVisible;
  @Output() addSkillModalVisibleChange = new EventEmitter();

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

  ngOnInit() {
    //initialize form group & form control
    this.addSkillForm = new FormGroup({
      'skillName': new FormControl('', [])
    });
  }

  selectSuggestion(skill) {
    this.addSkillForm.controls["skillName"].setValue(skill);
  }

  addSkill(formData) {
    let fc = formData.controls;
    let newSkill = {
      skillName: fc.skillName.value,
      expertiseLevel: this.currentExpertiseLevel
    }

    this.addSkillSubscription = this.skillsService.add(newSkill)
    .subscribe((data) => {
      console.log(data);
      if (data['success']) {
        this.skillsService.skillAddedEvent.emit(newSkill); //emit an event when new skill is edded
        this.closeAddSkill();
      } else {
        console.log('skill exists');
      }
    });
  }

  closeAddSkill() {
    this.addSkillForm.reset(); //reset form
    this.showSuggestedSkills = false; //hide suggested skills
    this.addSkillModalVisible = false; //hide modal
    this.addSkillModalVisibleChange.emit(this.addSkillModalVisible); //ask modal to close
    this.addSkillSubscription.unsubscribe();
  }
}
