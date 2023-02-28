import { Component, Input,OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shred/ingredient.module';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeServer: RecipeService){

  }
  ngOnInit(){}

  onAddToShoppingList(){
    this.recipeServer.addIngToShopList(this.recipe.ingredients)
  }

 
}
