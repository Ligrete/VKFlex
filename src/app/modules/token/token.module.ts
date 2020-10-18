import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenComponent } from './token.component';
import { LogoModule } from '../ui/logo/logo.module';



@NgModule({
  declarations: [
    TokenComponent,
  ],
  imports: [
    CommonModule,
    LogoModule
  ]
})
export class TokenModule { }
