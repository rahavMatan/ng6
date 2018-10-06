import {Ingredient } from '../shared/ingredient.model'
import { EventEmitter } from '@angular/core';
export class ShoppingListService {

    private _ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    get ingredients (){
        return this._ingredients.slice()
    }

    ingredientsChanged = new EventEmitter<Ingredient[]>()

    addIngredient(ingredient){
        this._ingredients.push(ingredient)
        this.ingredientsChanged.emit(this._ingredients.slice())
    }

    addIngredients(ings){
        this._ingredients.push(...ings)
        this.ingredientsChanged.emit(this._ingredients.slice()) 
    }

}