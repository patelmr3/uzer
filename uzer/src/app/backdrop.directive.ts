import { 
  Directive, 
  Input, 
  ElementRef, 
  ViewContainerRef, 
  HostBinding 
} from '@angular/core';

@Directive({
  selector: '[backdrop]'
})
export class BackdropDirective {
  @HostBinding('class') class = 'backdrop'; 
  @HostBinding('style.zIndex') zIndex;

  constructor(
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input() set backdrop(zIndex) {
    this.zIndex = zIndex;
  }

  ngOnInit() { }
}
