import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shred/ingredient.module';
import { ShoppingListService } from '../shopping.lis.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {}
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingamount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingamount);
    this.slService.addIngredient(newIngredient)
  }
}
