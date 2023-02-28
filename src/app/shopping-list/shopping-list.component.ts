import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shred/ingredient.module';
import { ShoppingListService } from './shopping.lis.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingredient[]
  constructor(private slService:ShoppingListService){

  }
  ngOnInit(){
    this.ingridients = this.slService.getIngredient();
    this.slService.IngredientChanged.subscribe((ingridients:Ingredient[])=>{
      this.ingridients = ingridients
    })
  }
}