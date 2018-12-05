import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[byBackground]'
})
export class BackgroundDirective {

  constructor(hostElement: ElementRef) { 
    hostElement.nativeElement.style.backgroundColor = 'blue';
  }

}
