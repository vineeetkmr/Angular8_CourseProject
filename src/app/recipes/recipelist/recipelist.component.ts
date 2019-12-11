import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';


@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
recipes:Recipe[]=[
  new Recipe("Dal Makhani","This is one of my favourite foods","https://www.cookwithmanali.com/wp-content/uploads/2019/04/Restaurant-Style-Dal-Makhani.jpg"),
  new Recipe("Mix Veg","This is one of my favourite foods","https://www.cookwithmanali.com/wp-content/uploads/2019/04/Restaurant-Style-Dal-Makhani.jpg")]
@Output() EmitRecipe=new EventEmitter<Recipe>();
  constructor() { }

ShowItem(item){
this.EmitRecipe.emit(item);
  }

  ngOnInit() {
  }

}
