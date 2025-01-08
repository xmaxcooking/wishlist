import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishesComponent } from './wish/components/wishes/wishes.component';
import { ContactComponent } from './contact/components/contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: WishesComponent },
  { path: 'contact', component: ContactComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
