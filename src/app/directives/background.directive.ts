import { Directive, ElementRef, OnInit, OnDestroy, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive ({
    selector: '[appBackground]'
})
export class BackgorundDirective implements OnInit, OnDestroy {
    @Input() hoverColor = 'black';
    @Input('appBackground') defaultColor = 'black';
    @HostBinding('style.background') backgroundEl: string;

    constructor(
        private element: ElementRef,
        private renderer: Renderer2
        )  {}

    ngOnInit() {
    //   console.log(this);
    //   this.element.nativeElement.style.backgroundColor = 'red';
      this.backgroundEl = this.defaultColor;
    }
    ngOnDestroy() {

    }

    @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
      const {nativeElement} = this.element;
    //   this.renderer.setStyle(nativeElement, 'background-color', 'blue');
      this.backgroundEl = this.hoverColor;
      this.renderer.addClass(nativeElement, 'white-render');
    }
    @HostListener('mouseleave', ['$event']) mouseLeave(event: Event) {
      const {nativeElement} = this.element;
    //   this.renderer.setStyle(nativeElement, 'background-color', 'red');
      this.backgroundEl = this.defaultColor;
      this.renderer.removeClass(nativeElement, 'white-render');
    }
}
