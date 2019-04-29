import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';
@Directive({
  selector: '[appBg]'
})
export class BgDirective implements OnInit {
  constructor (private el: ElementRef, private renderer: Renderer2){

  }

  ngOnInit(){
    console.log(this.el)
    const {nativeElement} = this.el;
    this.renderer.setStyle(nativeElement,'background-color', 'blue');
    this.renderer.addClass(nativeElement,'white-txt');
    // this.el.nativeElement.style.backgroundColor = 'red';
  }
}
