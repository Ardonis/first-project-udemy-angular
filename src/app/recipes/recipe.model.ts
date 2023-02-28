import { Ingredient } from "../shred/ingredient.module";

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients:Ingredient[]

  constructor(name: string, descriptio: string, imagePath: string, ingredients:Ingredient[]) {
    this.name = name;
    this.description = descriptio;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
