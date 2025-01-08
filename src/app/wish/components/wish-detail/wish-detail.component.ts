import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { WishItem } from '../../model/wishItem';

@Component({
  selector: 'app-wish-detail',
  templateUrl: './wish-detail.component.html',
  styleUrl: './wish-detail.component.css'
})
export class WishDetailComponent implements OnInit {

  wish: WishItem = new WishItem();

  constructor(private route: ActivatedRoute) {  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id') as `${string}-${string}-${string}-${string}-${string}`;
      const text = params.get('text');
      const completed = params.get('completed');
      this.wish = new WishItem(id, text ?? '', Boolean(completed));
    });
  }

  getWish() {
    return JSON.stringify(this.wish);
  }

}
