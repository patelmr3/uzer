import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate, group, animateChild } from '@angular/animations';

@Component({
  selector: 'page-title',
  template: `
    <div class="page-title-wrapper cf">
      <h1  
      [@pageTitleState]="pts" 
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

  pageTitle: String;
  pts: String;
  showBorder: Boolean = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe( (data) => { 
      this.pageTitle = data.pageTitle; 
    });
  }

  ngAfterViewInit() {
    this.pts = 'in';
  }

}
