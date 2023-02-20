export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, descriptio: string, imagePath: string) {
    this.name = name;
    this.description = descriptio;
    this.imagePath = imagePath;
  }
}
