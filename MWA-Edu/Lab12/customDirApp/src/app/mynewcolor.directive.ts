import {Directive, Input, ElementRef, Renderer2, HostListener, Output, EventEmitter } from '@angular/core';


@Directive({
  selector: '[appMynewcolor]'
})
export class MynewcolorDirective {

  @Input('mycolor') mycolor: string;
  @Output() sendColor = new EventEmitter();

  constructor(public element: ElementRef, public renderer2: Renderer2) {
  }

  @HostListener('click') colorChange() {
  console.log(this.mycolor);
  this.renderer2.setStyle(this.element.nativeElement, 'color', this.mycolor);
  this.sendColor.emit(this.mycolor);
  }

}

