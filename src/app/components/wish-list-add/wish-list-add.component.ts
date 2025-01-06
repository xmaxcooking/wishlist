import { Component, EventEmitter, Output } from '@angular/core';
import { WishItem } from '../../../shared/model/wishItem';

@Component({
  selector: 'app-wish-list-add',
  templateUrl: './wish-list-add.component.html',
  styleUrl: './wish-list-add.component.css'
})
export class WishListAddComponent {

  newWishText = '';

  @Output() wishAdded = new EventEmitter<WishItem>()

  newWish() {
    this.wishAdded.emit(new WishItem(this.newWishText))
    this.newWishText = ''
  }

}
