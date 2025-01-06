import { Component, EventEmitter, Output } from '@angular/core';
import { WishItem } from '../../../shared/model/wishItem';

@Component({
  selector: 'wish-list-add',
  templateUrl: './wish-list-add.component.html',
  styleUrl: './wish-list-add.component.css'
})
export class WishListAddComponent {

  newWishText: string = '';

  @Output() onNewWish = new EventEmitter<WishItem>()

  constructor() { }

  newWish() {
    this.onNewWish.emit(new WishItem(this.newWishText))
    this.newWishText = ''
  }

}
