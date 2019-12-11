import {Component} from '@angular/core';
import {Ingrediant} from '../Shared/ingrediants.model';
@Component({
    selector:'app-shopping-list',
    templateUrl:'shopping-list.component.html',
    styleUrls:['shopping-list.component.css']
})
export class ShoppingListComponent{
ingrediants:Ingrediant[]=[
    new Ingrediant("Apple",500),
    new Ingrediant("Tomato",60)
];
AddIngrediant(item:Ingrediant)
{
    console.log(item);
    this.ingrediants.push(item);
}

}