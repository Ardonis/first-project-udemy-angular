import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  recipeService: any;

  constructor(
    private recipeServer: RecipeService,
    private route: ActivatedRoute,
    private router:Router,
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeServer.getRecipe(this.id)
    });
  }

  onAddToShoppingList() {
    this.recipeServer.addIngToShopList(this.recipe.ingredients);
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route})
    // this.router.navigate(['../',this.id,'edit'], {relativeTo:this.route})
  }
}
