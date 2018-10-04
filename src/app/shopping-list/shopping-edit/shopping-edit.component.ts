import { Component, OnInit, Output,EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model'
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() ingerdientAdded = new EventEmitter<Ingredient>()
  @ViewChild('nameRef') nameRef
  @ViewChild('amountRef') amountRef

  onAddClicked(){
    console.log('click');
    const ing = new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value)
    console.log(ing);
    
    this.ingerdientAdded.emit(ing)
  }


}
