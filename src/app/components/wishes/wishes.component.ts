import { Component } from '@angular/core';
import { defaultFilter, WishFilter } from '../wish-list-filter/wish-list-filter.component';
import { WishItem } from '../../../shared/model/wishItem';

@Component({
  selector: 'wishes',
  templateUrl: './wishes.component.html',
  styleUrl: './wishes.component.css'
})
export class WishesComponent {

  items: WishItem[] = [
    new WishItem('Buy a unicorn'),
    new WishItem('Learn Angular', true),
    new WishItem('Build a portfolio'),
  ]

  filter: WishFilter = defaultFilter

  constructor() { }

  addWish(wish: WishItem) {
    this.items.push(wish)
    this.resetFilter()
  }

  resetFilter() {
    this.filter = defaultFilter
  }

  filteredWishes() {
    return this.items.filter(this.filter.action)
  }

}
