import {Component, Output,EventEmitter} from '@angular/core'

@Component({
    selector:'app-header',
    templateUrl:'header.component.html',
    styleUrls:['header.component.css']
})
export class HeaderComponent{
    collapsed=true;
    @Output() EmitCurrentPage=new EventEmitter<string>();
    CurrentPage="ShoppingList";

    GotoPage(Navtype:string)
    {
     this.CurrentPage=(Navtype=="recipes")?"recipes":"ShoppingList";
     this.EmitCurrentPage.emit(this.CurrentPage);
    }
    
}