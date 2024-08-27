import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
  @Input() recipe: any = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['recipe']) {
    }
  }
}
