import { 
  Component, 
  OnInit, 
  Input } 
from '@angular/core';

@Component({
  selector: 'expertise-level-indicator',
  template: `
    <div 
      class="expertise-level-name"
      [style.color]="expertiseLevel.color"
      [style.borderColor]="expertiseLevel.color">
        {{ expertiseLevel.name }}
        <div 
          class="sub-level" 
          [style.width]="expertiseLevel.subLevel + '%'"
          [style.backgroundColor]="expertiseLevel.color">
        </div>
    </div>
  `,
  styles: [`    
    .expertise-level-name {
      padding: .6em;
      border-radius: 3px;
      position: relative;
      border: 1px solid;
      font-size: .9em;
      font-weight: 500;
    }
    .sub-level{
      opacity: .2;
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
    }
  `]
})
export class ExpertiseLevelIndicatorComponent implements OnInit {

  @Input() expertiseLevel;

  constructor() { }

  ngOnInit() { }

}
