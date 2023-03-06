import { EventEmitter, Injectable } from "@angular/core";
import { ShoppingListService } from "../shopping-list/shopping.lis.service";
import { Ingredient } from "../shred/ingredient.module";
import { Recipe } from "./recipe.model";
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService{
    recipeSelected = new Subject<Recipe>();
    

    private recipes: Recipe[] = [
        new Recipe(
          'Hamburger',
          ' Fast-Food Restaurants dish',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg',[
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
          ]
        ),
        new Recipe(
          'Sandwitch',
          'Recipe Image',
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1556744250%2Fthe-ultimate-veggie-sandwich-1905.jpg%3Fitok%3D1ip9ZNIm&w=600&c=sc&poi=face&q=60',[
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
          ]
        ),
      ];

      constructor(private slServer:ShoppingListService){}

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index:number){
        return this.recipes[index]
      }

      addIngToShopList(ingedients:Ingredient[]){
        this.slServer.addIngredients(ingedients)
      }
}