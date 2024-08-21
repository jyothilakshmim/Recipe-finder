import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeFinderComponent } from './recipe-finder/recipe-finder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipeFinderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe-finder-app';
}
