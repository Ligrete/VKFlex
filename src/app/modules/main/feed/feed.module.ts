import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { SidebarModule } from '../../shared/sidebar/sidebar.module';



@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    SidebarModule
  ]
})
export class FeedModule { }
