import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
 @Input() recipeItem:Recipe;
 @Output() recipeItemEmit=new EventEmitter<void>();

 ShowDetail(item:Recipe)
 {
   this.recipeItemEmit.emit();
 }

}
