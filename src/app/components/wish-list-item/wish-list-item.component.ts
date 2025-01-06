import { Component, Input } from '@angular/core';
import { WishItem } from '../../../shared/model/wishItem';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {

  @Input() item!: WishItem;

  constructor() { }

  get labelClasses() {
    return {
      'fullfilled': this.item.completed,
      'text-muted': this.item.completed
    }
  }

  toggleItem() {
    this.item.completed = !this.item.completed
  }

}
