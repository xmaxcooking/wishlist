import { Component, EventEmitter, Output } from '@angular/core';
import { WishItem } from '../../shared/model/wishItem';

export const filters = [
  () => true,
  (  item: WishItem) => !item.completed,
  (  item: WishItem) => item.completed
]

@Component({
  selector: 'wish-list-filter',
  templateUrl: './wish-list-filter.component.html',
  styleUrl: './wish-list-filter.component.css'
})
export class WishListFilterComponent {

  filter: number = 0;

  @Output() onFilterChanged = new EventEmitter<number>()

  constructor() { }

  filterChanged(value: string) {
    this.filter = parseInt(value)
    this.onFilterChanged.emit(this.filter)
  }

}
