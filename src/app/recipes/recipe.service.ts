import { EventEmitter, Injectable } from "@angular/core";
import { ShoppingListService } from "../shopping-list/shopping.lis.service";
import { Ingredient } from "../shred/ingredient.module";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'A test Recipe',
          'Recipe Image',
          'https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?w=1060&t=st=1677141779~exp=1677142379~hmac=261aa9d96ac0383c5dac93d195f2d9bc4f9fb4ee4547390f18dac96650f6d330',[
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
          ]
        ),
        new Recipe(
          'A test Recipe',
          'Recipe Image',
          'https://picturetherecipe.com/wp-content/uploads/2020/04/PictureTheRecipe-Butter-Chicken.jpg',[
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
          ]
        ),
      ];

      constructor(private slServer:ShoppingListService){}

      getRecipe(){
        return this.recipes.slice();
      }

      addIngToShopList(ingedients:Ingredient[]){
        this.slServer.addIngredients(ingedients)
      }
}