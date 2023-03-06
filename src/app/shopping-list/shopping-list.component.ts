import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shred/ingredient.module';
import { ShoppingListService } from './shopping.lis.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingridients: Ingredient[]
  private igChangerSub:Subscription
  constructor(private slService:ShoppingListService){

  }
  ngOnInit(){
    this.ingridients = this.slService.getIngredient();
    this.igChangerSub = this.slService.IngredientChanged.subscribe((ingridients:Ingredient[])=>{
      this.ingridients = ingridients
    })
  }

  ngOnDestroy(){
    this.igChangerSub.unsubscribe()
  }
}