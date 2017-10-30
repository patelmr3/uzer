import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate, group, animateChild } from '@angular/animations';

@Component({
  selector: 'page-title',
  template: `
    <div class="page-title-wrapper cf">
      <h1  
      [@pageTitleState]="pageTitleState" 
      (@pageTitleState.done)="showBorder = true" 
      class="page-title"
      [class.visible]="showBorder">
        {{ pageTitle }}
      </h1>
    </div>
  `,
  styleUrls: ['./page-title.component.scss'],
  animations: [
    trigger('pageTitleState', [
      state('in', style({ marginTop: 0 })),
      transition('void => *', group([
        animate('.3s ease-in-out', style({ marginTop: 0 }))
      ]))
    ])
  ]
})
export class PageTitleComponent {
  pageTitleState: String;
  showBorder: Boolean = false;
  
  @Input() pageTitle: String;

  constructor() { }

  ngOnInit() {
    this.pageTitleState = 'in';
  }

}
