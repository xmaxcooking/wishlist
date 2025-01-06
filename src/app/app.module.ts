import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { WishListAddComponent } from './components/wish-list-add/wish-list-add.component';
import { WishListFilterComponent } from './components/wish-list-filter/wish-list-filter.component';
import { WishListItemComponent } from './components/wish-list-item/wish-list-item.component';
import { WishesComponent } from './components/wishes/wishes.component';

import { EventService } from '../shared/services/eventService';

@NgModule({
  declarations: [
    AppComponent,
    WishListComponent,
    WishListItemComponent,
    WishListFilterComponent,
    WishListAddComponent,
    WishesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
