import { Component, EventEmitter, Output } from '@angular/core';
import { WishItem } from '../../model/wishItem';

@Component({
  selector: 'app-wish-list-add',
  templateUrl: './wish-list-add.component.html',
  styleUrl: './wish-list-add.component.css'
})
export class WishListAddComponent {

  newWishText = '';

  @Output() wishAdded = new EventEmitter<WishItem>()

  submit() {
    this.wishAdded.emit(new WishItem(crypto.randomUUID(), this.newWishText))
    this.newWishText = ''
  }

}
