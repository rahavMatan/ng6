import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers:[]
})
export class RecipeListComponent implements OnInit {

  recipes = [];

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.recipes
  }

  onRecipeSelected(recipe: Recipe) {
   this.recipeService.recipeSelceted.emit(recipe);
  }

}
