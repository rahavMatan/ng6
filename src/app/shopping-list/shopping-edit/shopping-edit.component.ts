import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  subscription: Subscription
  editMode = false;
  itemIndex:number
  editedItem:Ingredient
  @ViewChild('ingForm') ingForm:NgForm

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {    
    
    this.subscription = this.slService.ingreidentEdit.subscribe(
      (index)=>{
        this.editMode=true;
        this.itemIndex=index;
        this.editedItem = this.slService.getIngredient(index)
        this.ingForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        })
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  onAddItem(form:NgForm) {
    const {name, amount} = form.value
    const newIngredient = new Ingredient(name, amount);
    if(this.editMode){
      this.slService.updateIngredient(this.itemIndex, newIngredient)
    } else {
      this.slService.addIngredient(newIngredient);
    }
   
    form.reset()
    this.editMode=false
  }

  onClear(){
    this.ingForm.reset()
    this.editMode=false;
  }

  onDelete(){
    this.slService.removeIngredient(this.itemIndex)
    this.editMode=false;
    this.ingForm.reset()
  }
}
