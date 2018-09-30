import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  template: `<div class="success">neh..</div>`,
  styles: [`
    .success {
      background-color:green;
    }
  `]
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
