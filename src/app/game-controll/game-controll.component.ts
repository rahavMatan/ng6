import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-controll',
  templateUrl: './game-controll.component.html',
  styleUrls: ['./game-controll.component.css']
})
export class GameControllComponent implements OnInit {

  constructor() { }

  interval = null
  count:number = 0
  @Output() newNumber = new EventEmitter<{count:number}>();

  ngOnInit() {
  }

  start(){
      this.interval = setInterval(()=>{
        console.log('emiting', this.count);
        
        this.newNumber.emit({count:this.count++})
      },1000)
  }

  stop(){
    clearInterval(this.interval)
  }
}
