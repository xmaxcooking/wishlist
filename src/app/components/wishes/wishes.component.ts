import { Component, OnInit } from '@angular/core';
import { defaultFilter, WishFilter } from '../wish-list-filter/wish-list-filter.component';
import { WishItem } from '../../../shared/model/wishItem';
import { EventService } from '../../../shared/services/events/event.service';
import { WishService } from '../../../shared/services/wishes/wish.service';

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrl: './wishes.component.css'
})
export class WishesComponent implements OnInit {

  items: WishItem[] = []

  filter: WishFilter = defaultFilter

  constructor(events: EventService, private wishes: WishService) {
    events.listen('removeWish', (wish: WishItem) => {
      this.removeWish(wish)
    })
  }

  ngOnInit() {
    this.wishes.getWishes().subscribe((data: any) => {
      this.items = data
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
