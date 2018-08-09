import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes: Recipe[]=[
  new Recipe ('A test recipe', 'This is simply a test',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhkyh7O3HkcSP-uisrFDgtmw5le3qHKmQbQHA8UFC5iHIaD-Jk')
  ,new Recipe ('Another test recipe', 'This is simply a test',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhkyh7O3HkcSP-uisrFDgtmw5le3qHKmQbQHA8UFC5iHIaD-Jk')
];
debugger

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }

}
