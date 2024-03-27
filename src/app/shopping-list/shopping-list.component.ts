import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit{
  ingredients = [new Ingredient ('Macarrons', 5),
  new Ingredient ('Tomatiga', 1),];
  

  constructor(){}

  ngOnInit(){
      
  }
}
