import {
  Component,
  OnInit,
  ElementRef,
<<<<<<< HEAD
  ViewChild,
  EventEmitter,
  Output
=======
  ViewChild
>>>>>>> 757c07e4472c423ce9c7495f495e2c591f9b1496
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
<<<<<<< HEAD
 

  constructor(private shoppingListService:ShoppingListService) { }
=======

  constructor(private slService: ShoppingListService) { }
>>>>>>> 757c07e4472c423ce9c7495f495e2c591f9b1496

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
<<<<<<< HEAD
    //this.ingredientAdded.emit(newIngredient);
    this.shoppingListService.addIngredient(newIngredient)
=======
    this.slService.addIngredient(newIngredient);
>>>>>>> 757c07e4472c423ce9c7495f495e2c591f9b1496
  }

}
