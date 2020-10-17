import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule
  ]
})
export class FeedModule { }
