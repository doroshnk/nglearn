import {Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding} from '@angular/core';
@Directive({
  selector: '[appBg]'
})
export class BgDirective implements OnInit {

  @HostBinding('style.backgroundColor') BG : string;

  constructor (private el: ElementRef, private renderer: Renderer2){

  }

  ngOnInit(){
    console.log(this.el)

    // this.el.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseenter', ['$event']) mouseEnter(event: Event){
    const {nativeElement} = this.el;
    this.BG = 'red';
    this.renderer.addClass(nativeElement,'white-txt');
    this.renderer.setStyle(nativeElement,'border', '1px solid black');
  }
  @HostListener('mouseleave') mouseLeave(){
    const {nativeElement} = this.el;
    this.BG = 'transparent';
    this.renderer.setStyle(nativeElement,'border', 'none');
    this.renderer.removeClass(nativeElement,'white-txt');
  }

}
