import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { SearchRecipeComponent } from "../search-recipe/search-recipe.component";
import { RecipeListComponent } from "../recipe-list/recipe-list.component";
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';

interface Recipe {
  name: string;
  description: string;
  ingredients: string[];
  image: string;
}

@Component({
  selector: 'app-recipe-finder',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent, SearchRecipeComponent, RecipeListComponent, RecipeDetailsComponent],
  templateUrl: './recipe-finder.component.html',
  styleUrls: ['./recipe-finder.component.css']
})
export class RecipeFinderComponent {
  recipes: Recipe[] = [];
  selectedRecipe: string = '';
  private allRecipes: Recipe[] = [
    {
      name: 'Mediterranean Cod with Tomato and Aubergine',
      description: 'A delicious dish featuring cod fillets baked with a Mediterranean mix of tomatoes, aubergine, onions, and garlic.',
      ingredients: ['tomato', 'aubergine', 'onion', 'garlic', 'cod'],
      image: 'mediterranean-cod.jpg'
    },
    {
      name: 'Cod Ratatouille',
      description: 'A twist on the classic French vegetable stew, incorporating cod for added protein.',
      ingredients: ['tomato', 'aubergine', 'onion', 'garlic', 'cod'],
      image: 'cod-ratatouille.jpg'
    },
  ];

  findRecipes(ingredients: string): void {
    const ingredientList = ingredients.toLowerCase().split(',').map(ingredient => ingredient.trim());
    this.recipes = this.allRecipes.filter(recipe =>
      recipe.ingredients.every(ingredient => ingredientList.includes(ingredient))
    );
  }

  onRecipeSelected(recipe: any): void {
    this.selectedRecipe = recipe;
    console.log(this.selectedRecipe);
    }
}
