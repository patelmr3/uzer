import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spinner',
  template: `
    <span class="spinner" [ngClass]="spinnerClass">
      <i class="fa fa-circle-o-notch fa-spin fa-fw"></i>
    </span>
    `,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input('inline') isInline: Boolean;
  @Input('size') spinnerSize: String;
  @Input('color') color: String;

  spinnerClass;
  
  constructor() { }

  ngOnInit() {
    this.spinnerClass = [
      this.spinnerSize,
      this.isInline ? 'inline' : 'block',
      this.color
    ]
  }
}
