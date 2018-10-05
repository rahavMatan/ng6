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