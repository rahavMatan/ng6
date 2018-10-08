import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() rIndex:string

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    console.log('id', this.rIndex);
    console.log('rec', this.recipe);
    
  }


}
