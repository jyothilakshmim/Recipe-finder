import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Recipe {
  name: string;
  description: string;
  ingredients: string[];
}

@Component({
  selector: 'app-recipe-finder',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recipe-finder.component.html',
  styleUrls: ['./recipe-finder.component.css']
})
export class RecipeFinderComponent {
  ingredients: string = '';
  recipes: Recipe[] = [];

  private allRecipes: Recipe[] = [
    {
      name: 'Mediterranean Cod with Tomato and Aubergine',
      description: 'A delicious dish featuring cod fillets baked with a Mediterranean mix of tomatoes, aubergine, onions, and garlic.',
      ingredients: ['tomato', 'aubergine', 'onion', 'garlic', 'cod']
    },
    {
      name: 'Cod Ratatouille',
      description: 'A twist on the classic French vegetable stew, incorporating cod for added protein.',
      ingredients: ['tomato', 'aubergine', 'onion', 'garlic', 'cod']
    },
  ];

  findRecipes(): void {
    const ingredientList = this.ingredients.toLowerCase().split(',').map(ingredient => ingredient.trim());
    this.recipes = this.allRecipes.filter(recipe =>
      recipe.ingredients.every(ingredient => ingredientList.includes(ingredient))
    );
  }
}
