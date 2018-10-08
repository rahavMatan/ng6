import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[]
})
export class ShoppingListComponent implements OnInit {
<<<<<<< HEAD

=======
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) { }
>>>>>>> 757c07e4472c423ce9c7495f495e2c591f9b1496

  constructor(private shoppingListService:ShoppingListService) { }
  ingredients = []
  ngOnInit() {
<<<<<<< HEAD
    this.ingredients = this.shoppingListService.ingredients
    this.shoppingListService.ingredientsChanged.subscribe(            
      (ings:Ingredient[])=>{      
        this.ingredients = ings
      }
    )
  }

  onIngredientAdded(ingredient: Ingredient) {
    //this.ingredients.push(ingredient);
  }
=======
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }
>>>>>>> 757c07e4472c423ce9c7495f495e2c591f9b1496
}
