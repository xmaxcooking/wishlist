import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishModule } from './wish/wish.module';
import { ContactModule } from "./contact/contact.module";
import { NavigationModule } from './navigation/navigation.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    WishModule,
    ContactModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
