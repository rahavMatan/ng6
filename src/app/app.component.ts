import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .click {
      background-color:blue;
    }
  `]
})
export class AppComponent {
  clicks = []
  toggleShow(){
    this.showP = !this.showP
    this.clicks.push(this.clicks.length)
  }
}
