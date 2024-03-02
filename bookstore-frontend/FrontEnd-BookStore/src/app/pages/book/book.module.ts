import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookService } from './book.service';

export const routes = [
  { path: '', component: BookListComponent, pathmatch: 'full'},
  { path: 'add', component: BookAddComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    BookAddComponent,
    BookListComponent,
    BookEditComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  providers: [
    BookService
  ]
})
export class BookModule { }
