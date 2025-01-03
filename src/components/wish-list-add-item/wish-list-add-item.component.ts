import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'wish-list-add-item',
  templateUrl: './wish-list-add-item.component.html',
  styleUrl: './wish-list-add-item.component.css'
})
export class WishListAddItemComponent {

  newWishText: string = '';

  @Output() onItemAdded = new EventEmitter<string>()

  constructor() { }

  addItem() {
    this.onItemAdded.emit(this.newWishText)
    this.newWishText = ''
  }

}
