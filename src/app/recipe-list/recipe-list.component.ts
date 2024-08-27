import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Recipe {
  name: string;
  description: string;
  ingredients: string[];
  image: string;
}

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  selectedRecipe: string = '';
  @Input() recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<any>();

  selectRecipe(recipe: any): void {
    this.recipeSelected.emit(recipe);
  }
}
