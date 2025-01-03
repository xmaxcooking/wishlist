import { Component } from '@angular/core';
import { WishItem } from '../shared/model/wishItem';
import { filters } from '../components/wish-list-filter/wish-list-filter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  items: WishItem[] = [
    new WishItem('Buy a unicorn'),
    new WishItem('Learn Angular', true),
    new WishItem('Build a portfolio'),
  ]

}
