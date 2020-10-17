import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './modules/main/feed/feed.component';
import { TokenComponent } from './token/token.component';

const routes: Routes = [
  { path: '', component: TokenComponent },
  { path: 'auth', component: TokenComponent },
  { path: 'feed', component: FeedComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
