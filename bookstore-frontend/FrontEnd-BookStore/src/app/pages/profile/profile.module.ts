import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileAddComponent } from './profile-add/profile-add.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileService } from './services/profile.service';
import { SharedModule } from 'src/shared/shared.module';

export const routes = [
  { path: '', component: ProfileViewComponent, pathmatch: 'full'},
  { path: 'add', component: ProfileAddComponent, pathMatch: 'full' },
];


@NgModule({
  declarations: [
    ProfileAddComponent,
    ProfileViewComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  providers: [
    ProfileService
  ]
})
export class ProfileModule { }
