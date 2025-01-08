import { Component, Input } from '@angular/core';
import { EventService } from '../../services/events/event.service';
import { WishItem } from '../../model/wishItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {

  @Input() item!: WishItem;

  constructor(private events: EventService, private router: Router) { }

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

  goToDetail() {
    this.router.navigate(['wish', this.item.id, this.item.text, this.item.completed])
  }

}
