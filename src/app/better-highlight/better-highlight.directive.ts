import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColr:string;
  constructor(private elemRef:ElementRef,private renderer:Renderer2) { }
ngOnInit()
  {
    this.renderer.setStyle(this.elemRef.nativeElement,'background','pink');
  }
  @HostListener('mouseenter') mouseover(eventdata:Event)
  {
    this.renderer.setStyle(this.elemRef.nativeElement,'background','yellow');
  }
  @HostListener('mouseout') mouseleave(eventdata:Event)
  {
    //this.renderer.setStyle(this.elemRef.nativeElement,'background','pink');
    this.backgroundColr='pink';
    setTimeout(() => {
      this.backgroundColr='red';
    }, 2000);
  }


}
