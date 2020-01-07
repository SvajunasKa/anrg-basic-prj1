import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.module';

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "test",
      "https://assets.bonappetit.com/photos/5db1ce83358b460009148cb7/3:2/w_2560,c_limit/Basically-Spinach-Tarte-Recipe.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
