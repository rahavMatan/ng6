<<<<<<< HEAD
import { Directive, TemplateRef, ViewContainerRef, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})

export class DropdownDirective {

    // constructor(private templateRef:TemplateRef<any>, private vcRef:ViewContainerRef){

    // }

    @HostBinding('class.open' )isOpen = false
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen
    }
}
=======
import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
>>>>>>> 757c07e4472c423ce9c7495f495e2c591f9b1496
