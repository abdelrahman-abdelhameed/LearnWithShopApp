import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes/recipe.model'
@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit {


  RecipeList : Recipe[] = [
    new  Recipe("SHAKSHUKA" , " Shakshuka is a classic North African and Middle Eastern dish and one that’s eaten for breakfast or any meal of the day. It’s made from simple, healthy ingredients and is vegetarian. Shakshuka literally means “a mixture” and the traditional version uses tomatoes, onions and spices as the base with eggs poached on top." , "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg"),
    new  Recipe("SHAKSHUKA" , " Shakshuka is a classic North African and Middle Eastern dish and one that’s eaten for breakfast or any meal of the day. It’s made from simple, healthy ingredients and is vegetarian. Shakshuka literally means “a mixture” and the traditional version uses tomatoes, onions and spices as the base with eggs poached on top." , "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg"),
  ];
  constructor() { }
   
  ngOnInit(): void {
  }

}
