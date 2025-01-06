import { Component, Input } from '@angular/core';
import { WishItem } from '../../../shared/model/wishItem';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {

  @Input() wishes: WishItem[] = [];

}
