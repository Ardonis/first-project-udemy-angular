import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'Recipe Image',
      'https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?w=1060&t=st=1677141779~exp=1677142379~hmac=261aa9d96ac0383c5dac93d195f2d9bc4f9fb4ee4547390f18dac96650f6d330'
    ),
    new Recipe(
      'A test Recipe',
      'Recipe Image',
      'https://picturetherecipe.com/wp-content/uploads/2020/04/PictureTheRecipe-Butter-Chicken.jpg'
    ),
  ];

  constructor() {}
  ngOnInit() {}
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
