import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeFinderComponent } from './recipe-finder/recipe-finder.component';
import { SearchRecipeComponent } from "./search-recipe/search-recipe.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipeFinderComponent, SearchRecipeComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe-finder-app';
}
