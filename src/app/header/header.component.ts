import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() navigation = new EventEmitter<string>()

  setNav(location:string){
    console.log(location);
    
    this.navigation.emit(location)
  }
}
