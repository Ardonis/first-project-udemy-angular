import { Ingredient } from "../shred/ingredient.module";
import { Subject } from "rxjs";
export class ShoppingListService{

  IngredientChanged = new Subject<Ingredient[]>();
    private ingridients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 5)
      ];

      getIngredient(){
        return this.ingridients.slice();
      }

      addIngredient(ingredient:Ingredient){
        this.ingridients.push(ingredient)
        this.IngredientChanged.next(this.ingridients.slice())
      }

      addIngredients(ingredients:Ingredient[]){
        // for(let ingredient of ingredients){
        //   this.addIngredient(ingredient)
        // }
        this.ingridients.push(...ingredients)
        this.IngredientChanged.next(this.ingridients.slice())
      }
}