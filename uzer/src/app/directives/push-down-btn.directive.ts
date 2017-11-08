import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[pushDownBtn]'
})
export class PushDownBtnDirective {
  @HostBinding('class.down') isDown = false;
  @HostListener('mousedown') mouseDown() {
    this.isDown = true;
  } 
  @HostListener('mouseup') mouseUp() {
    this.isDown = false;
  } 

  constructor() { }

  ngOnInit() {}

}
