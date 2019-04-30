import {Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input} from '@angular/core';
@Directive({
  selector: '[appBg]'
})
export class BgDirective implements OnInit {

  @Input('appBg') defColor: string = 'transparent';
  @Input() setColor: string = 'pink';


  @HostBinding('style.backgroundColor') BG : string;

  constructor (private el: ElementRef, private renderer: Renderer2){

  }

  ngOnInit(){
    console.log(this.el)
    this.BG = this.defColor;
    // this.el.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseenter', ['$event']) mouseEnter(event: Event){
    const {nativeElement} = this.el;
    this.BG = this.setColor;
    this.renderer.addClass(nativeElement,'white-txt');
    this.renderer.setStyle(nativeElement,'border', '1px solid black');
  }
  @HostListener('mouseleave') mouseLeave(){
    const {nativeElement} = this.el;
    this.BG = this.defColor;
    this.renderer.setStyle(nativeElement,'border', 'none');
    this.renderer.removeClass(nativeElement,'white-txt');
  }

}
