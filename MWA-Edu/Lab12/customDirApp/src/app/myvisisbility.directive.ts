import { Directive, Input, ElementRef, Renderer2, OnInit} from '@angular/core';

@Directive({
  selector: '[appMyvisisbility]'
})
export class MyvisisbilityDirective implements OnInit {

  constructor(public element: ElementRef, public renderer2: Renderer2) { }

  @Input() myhidden: boolean;



  ngOnInit() {
    console.log(this.myhidden);

  if (this.myhidden) {
    this.renderer2.setStyle(this.element.nativeElement, 'display', 'none');
  }

  }


}
