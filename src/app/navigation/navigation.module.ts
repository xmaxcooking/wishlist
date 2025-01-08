import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    NavigationHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    NavigationHeaderComponent
  ]
})
export class NavigationModule { }
