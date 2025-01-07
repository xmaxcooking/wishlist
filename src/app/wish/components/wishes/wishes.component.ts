import { Component, OnInit } from '@angular/core';
import { defaultFilter, WishFilter } from '../wish-list-filter/wish-list-filter.component';
import { WishItem } from '../../model/wishItem';
import { EventService } from '../../services/events/event.service';
import { WishService } from '../../services/wishes/wish.service';

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
    this.wishes.getWishes().subscribe({
      next: (data: unknown) => {
        if (data instanceof Array) {
          this.items = data?.map((item: WishItem) => new WishItem(item.text, item.completed)) ?? []
        }
      },
      error: (error) => {
        console.error('Error loading wishes', error)
      }
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

  getFilteredWishes() {
    return this.items.filter(this.filter.action)
  }

}
