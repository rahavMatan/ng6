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


  constructor(private shoppingListService:ShoppingListService) { }
  ingredients = []
  ngOnInit() {
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
}
