import { Component, Input } from '@angular/core';
import { EventService } from '../../services/events/event.service';
import { WishItem } from '../../model/wishItem';

@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {

  @Input() item!: WishItem;

  constructor(private events: EventService) { }

  get labelClasses() {
    return {
      'fullfilled': this.item.completed,
      'text-muted': this.item.completed
    }
  }

  toggleItem() {
    this.item.completed = !this.item.completed
  }

  removeItem() {
    this.events.emit('removeWish', this.item)
  }

}
