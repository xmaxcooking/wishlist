import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { WishListAddComponent } from './components/wish-list-add/wish-list-add.component';
import { WishListFilterComponent } from './components/wish-list-filter/wish-list-filter.component';
import { WishListItemComponent } from './components/wish-list-item/wish-list-item.component';
import { WishesComponent } from './components/wishes/wishes.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WishListComponent,
    WishListItemComponent,
    WishListFilterComponent,
    WishListAddComponent,
    WishesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [provideHttpClient()],
  exports: [WishesComponent]
})
export class WishModule { }
