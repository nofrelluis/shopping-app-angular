import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('Macarrons','Estan tremendos',
  'https://e00-xlk-cooking-elmundo.uecdn.es/files/article_main_microformat_1_1/uploads/2023/03/01/63fe92b5597d0.jpeg'),new Recipe('Macarrons','Estan tremendos',
  'https://e00-xlk-cooking-elmundo.uecdn.es/files/article_main_microformat_1_1/uploads/2023/03/01/63fe92b5597d0.jpeg'
  )];

  constructor(){}

  ngOnInit(){
    
  }
}
