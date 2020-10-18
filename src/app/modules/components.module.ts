import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoModule } from './ui/logo/logo.module';
import { TokenModule } from './token/token.module';
import { FeedModule } from './main/feed/feed.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TokenModule,
    FeedModule
  ]
})
export class ComponentsModule { }
