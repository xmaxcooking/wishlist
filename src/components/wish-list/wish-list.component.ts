import { Component, Input, OnInit } from '@angular/core';
import { WishItem } from '../../shared/model/wishItem';
import { filters } from '../wish-list-filter/wish-list-filter.component';

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {

  @Input() wishes: WishItem[] = [];

  filter: (item: WishItem) => boolean = filters[0];

  constructor() { }

  get visibleItems(): WishItem[] {
    return this.wishes.filter(this.filter);
  }

  itemAdded($event: string) {
    this.wishes.push(new WishItem($event));
  }

  filterChanged($event: number) {
    this.filter = filters[$event];
  }

}
