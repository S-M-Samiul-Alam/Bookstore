import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { SharedModule } from 'src/shared/shared.module';
import { UserEditComponent } from './user-edit/user-edit.component';

export const routes = [
  { path: '', component: UserListComponent, pathmatch: 'full'},
  { path: 'add', component: UserAddComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    UserAddComponent,
    UserListComponent,
    UserEditComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
