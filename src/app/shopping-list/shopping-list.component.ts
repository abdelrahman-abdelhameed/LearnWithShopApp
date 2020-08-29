import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../Shared/ingredient.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredient : Ingredient[] = [
   new Ingredient("eggs" , "5"),
   new Ingredient("onine" , "1"),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
