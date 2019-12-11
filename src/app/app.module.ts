import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipelistComponent } from './recipes/recipelist/recipelist.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipelist/recipe-item/recipe-item.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component'
import {BasicHighlightDirective} from './basic-highlight/basichighlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    RecipesComponent, 
    RecipeDetailsComponent, 
    RecipeItemComponent,
    ShoppingListComponent,
    RecipelistComponent,
    ShoppingEditComponent,
    BasicHighlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
