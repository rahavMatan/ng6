import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warnning',
  template: `
  <p class="warning">
    yeah!
  <p>`,
  styles: [`
    p {
      color:purple;
    }
  `]
})
export class WarnningComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
