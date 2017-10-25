import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[pushDownBtn]'
})
export class PushDownBtnDirective {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.onmousedown = () => {
      this.el.nativeElement.classList.add('down');
    };
    this.el.nativeElement.onmouseup = () => {
      this.el.nativeElement.classList.remove('down');
    }
  }

}
