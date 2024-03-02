import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('./pages/user/user.module').then(
            (m) => m.UserModule,
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./pages/profile/profile.module').then(
            (m) => m.ProfileModule,
          ),
      },
      {
        path: 'book',
        loadChildren: () =>
          import('./pages/book/book.module').then(
            (m) => m.BookModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    BrowserModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
