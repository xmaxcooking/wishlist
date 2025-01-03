import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from '../components/wish-list/wish-list.component';
import { WishListItemComponent } from '../components/wish-list-item/wish-list-item.component';
import { WishListAddItemComponent } from '../components/wish-list-add-item/wish-list-add-item.component';
import { WishListFilterComponent } from '../components/wish-list-filter/wish-list-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    WishListComponent,
    WishListItemComponent,
    WishListFilterComponent,
    WishListAddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
