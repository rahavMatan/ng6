import { Directive, OnInit,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elRef:ElementRef) { }

  ngOnInit(){
    console.log(this.elRef);
    this.elRef.nativeElement.style.backgroundColor='yellow'
  }
}
