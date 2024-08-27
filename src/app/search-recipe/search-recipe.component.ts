import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-recipe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-recipe.component.html',
  styleUrl: './search-recipe.component.css'
})
export class SearchRecipeComponent {
  ingredients: string = '';
  @Output() ingredientsAvailable = new EventEmitter<string>();
  sendIngredients(): void{
    this.ingredientsAvailable.emit(this.ingredients);
  }
}
