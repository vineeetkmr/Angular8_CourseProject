import { Component, OnInit, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingrediant } from 'src/app/Shared/ingrediants.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@Output() ItemAdded=new EventEmitter<Ingrediant>();
@ViewChild('recipeName',{static:false}) recipName:ElementRef;
@ViewChild('recipeAmount',{static:false}) recipAmount:ElementRef;
Amount;


  constructor() { }

  ngOnInit() {
  }

  AddItem()
  {
   
  this.ItemAdded.emit({Name:this.recipName.nativeElement.value,Amount:this.recipAmount.nativeElement.value});
  }

}
