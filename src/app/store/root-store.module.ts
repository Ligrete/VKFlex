import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreRouterConnectingModule} from '@ngrx/router-store';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
    StoreModule.forRoot({}, {}),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({name: 'VKFlex'}),
    EffectsModule.forRoot([]),
    
  ]
})
export class RootStoreModule { }
