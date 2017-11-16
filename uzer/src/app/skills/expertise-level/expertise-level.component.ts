import { 
  Component, 
  OnInit,
  Input,
  Output,
  EventEmitter 
} from '@angular/core';

import {
  FormGroup,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'expertise-level',
  templateUrl: './expertise-level.component.html',
  styleUrls: ['./expertise-level.component.scss']
})
export class ExpertiseLevelComponent implements OnInit {

  constructor() { }

  expertiseLevelForm;

  @Input() currentExpertiseLevel;
  @Output() currentExpertiseLevelChange = new EventEmitter();

  expertiseLevels = [
    {name: 'No Skills', color: '#F44336'},
    {name: 'Beginner', color: '#E91E63'},
    {name: 'Intermediate', color: '#9C27B0'},
    {name: 'Proficiant', color: '#2196F3'},
    {name: 'Expert', color: '#4CAF50'},
  ];

  ngOnInit() {
    let curExpLvl = this.currentExpertiseLevel.level;
    //create form group and form control
    this.expertiseLevelForm = new FormGroup({
      expertiseLevel: new FormControl(curExpLvl || 50)
    });
    //initialize expertise level
    this.onExpertiseLevelChange(curExpLvl || 50);
  }

  onExpertiseLevelChange(lvl) {
    
    let currentExpertiseLevel, 
        subLevel,
        expertiseLevels = this.expertiseLevels;

    //determine expertise level
    if (lvl > 0 && lvl <= 25) {
      currentExpertiseLevel = expertiseLevels[1];
      subLevel = ((lvl - 1) * 100) / 24;
    } else if (lvl > 25 && lvl <= 50) {
      currentExpertiseLevel = expertiseLevels[2];
      subLevel = ((lvl - 26) * 100) / 24;
    } else if (lvl > 50 && lvl <= 75) {
      currentExpertiseLevel = expertiseLevels[3];
      subLevel = ((lvl - 51) * 100) / 24;
    } else if (lvl > 75 && lvl <= 100) {
      currentExpertiseLevel = expertiseLevels[4];
      subLevel = ((lvl - 76) * 100) / 24;
    } else {
      currentExpertiseLevel = expertiseLevels[0];
    }

    //assign expertise level values
    this.currentExpertiseLevel = currentExpertiseLevel;
    this.currentExpertiseLevel['subLevel'] = subLevel;
    this.currentExpertiseLevel['level'] = lvl;
    
    //emit updated expertiselevel value to parent
    this.currentExpertiseLevelChange.emit(this.currentExpertiseLevel);

  }

}
