import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from '../../model/wishItem';

export interface WishFilter {
  label: string,
  action: (item: WishItem) => boolean
}

export const filters: WishFilter[] = [
  { label: 'All', action: () => true },
  { label: 'Unfullfilled', action: (item: WishItem) => !item.completed },
  { label: 'Fullfilled', action: (item: WishItem) => item.completed }
]

export const defaultFilter: WishFilter = filters[0]

@Component({
  selector: 'app-wish-list-filter',
  templateUrl: './wish-list-filter.component.html',
  styleUrl: './wish-list-filter.component.css'
})
export class WishListFilterComponent {

  filters: WishFilter[] = filters

  @Input() filter!: WishFilter
  @Output() filterChange = new EventEmitter<WishFilter>()

  onFilterChange(filter: WishFilter) {
    this.filterChange.emit(filter)
  }

}
