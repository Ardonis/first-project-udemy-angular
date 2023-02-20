import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shred/ingredient.module';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 5)
  ];
  constructor(){

  }
  ngOnInit(){}

}