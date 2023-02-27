import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shred/ingredient.module';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
@ViewChild('nameInput', {static: false}) nameInputRef:ElementRef;
@ViewChild('amountInput', {static: false}) amountInputRef:ElementRef;
IngridinetAdded =new EventEmitter<Ingredient>();
@Output() ingridinetAdded =new EventEmitter<Ingredient>();

  onAddItem(){
    const ingName =this.nameInputRef.nativeElement.value;
    const ingamount =this.amountInputRef.nativeElement.value;
    const newIngredient =new Ingredient(ingName, ingamount)
    this.ingridinetAdded.emit(newIngredient)
  }
}
