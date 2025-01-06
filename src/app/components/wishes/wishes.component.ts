import { Component } from '@angular/core';
import { defaultFilter, WishFilter } from '../wish-list-filter/wish-list-filter.component';
import { WishItem } from '../../../shared/model/wishItem';
import { EventService } from '../../../shared/services/eventService';

@Component({
  selector: 'app-wishes',
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

  constructor(events: EventService) {
    events.listen('removeWish', (wish: WishItem) => {
      this.removeWish(wish)
    })
  }

  addWish(wish: WishItem) {
    this.items.push(wish)
    this.resetFilter()
  }

  removeWish(wish: WishItem): void {
    const index = this.items.indexOf(wish)
    this.items.splice(index, 1)
  }

  resetFilter() {
    this.filter = defaultFilter
  }

  filteredWishes() {
    return this.items.filter(this.filter.action)
  }

}
