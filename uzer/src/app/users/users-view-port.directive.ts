import { Directive, OnInit, ElementRef } from '@angular/core';
import { Element } from '@angular/compiler';

@Directive({
  selector: '[users-view-port]'
})
export class UsersViewPortDirective implements OnInit {

  winHeight: any;
  eleOffsetTop: any;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.setViewPortHeight();
  }

  setViewPortHeight() {
    console.log('resizing');
    this.winHeight = window.innerHeight;
    this.eleOffsetTop = this.element.nativeElement.offsetTop;
    this.element.nativeElement.style.height = this.winHeight - this.eleOffsetTop + 'px';
  }

}
