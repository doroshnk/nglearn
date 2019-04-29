import {Directive, ElementRef, OnInit} from '@angular/core';
@Directive({
  selector: '[appBg]'
})
export class BgDirective implements OnInit {
  constructor (private el: ElementRef){

  }

  ngOnInit(){
    console.log(this.el)
    this.el.nativeElement.style.backgroundColor = 'red';
  }
}
