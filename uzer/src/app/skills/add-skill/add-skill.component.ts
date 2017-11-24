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

import { ActivatedRoute } from '@angular/router';

import { 
  FormGroup, 
  FormControl } from '@angular/forms';

import { SkillsService } from '../../services/skills-service/skills.service';
import { Subscription } from 'rxjs/Subscription';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss'],
  animations: [scale, scaleCenter, fadeIn]
})
export class AddSkillComponent implements OnInit {

  addSkillForm: FormGroup;
  showSuggestedSkills: Boolean;
  addSkillFormzIndex: Number = 105;
  currentExpertiseLevel: any = {};
  showSpinner: Boolean;
  activatedUserId: String;

  addSkillSubscription = new Subscription();
  updateSkillSubscription = new Subscription();
  paramMapSubscription = new Subscription();

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

  constructor(
    private skillsService: SkillsService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    //initialize form group & form control
    this.addSkillForm = new FormGroup({
      'skillName': new FormControl('', [])
    });

    this.paramMapSubscription = this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.activatedUserId = paramMap.get('userId');
      console.log(this.activatedUserId);
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

    this.showSpinner = true;

    this.addSkillSubscription = this.skillsService.add(newSkill, this.activatedUserId)
    .subscribe((data) => {

      console.log(data);

      if (data['success']) {
        this.skillsService.skillAddedEvent.emit(newSkill,); //emit an event when new skill is edded
        this.snackBar.open('Skill added: ' + newSkill.skillName, '', {duration: 2000});
        this.closeAddSkill();
      } else {
        this.snackBar.open('Error: ' + newSkill.skillName + ' is already added', '', {duration: 2000});
      }

      this.showSpinner = false;
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
