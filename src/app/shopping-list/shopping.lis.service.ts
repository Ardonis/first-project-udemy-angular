import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shred/ingredient.module";

export class ShoppingListService{

  IngredientChanged = new EventEmitter<Ingredient[]>();
    private ingridients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 5)
      ];

      getIngredient(){
        return this.ingridients.slice();
      }

      addIngredient(ingredient:Ingredient){
        this.ingridients.push(ingredient)
        this.IngredientChanged.emit(this.ingridients.slice())
      }

      addIngredients(ingredients:Ingredient[]){
        // for(let ingredient of ingredients){
        //   this.addIngredient(ingredient)
        // }
        this.ingridients.push(...ingredients)
        this.IngredientChanged.emit(this.ingridients.slice())
      }
}