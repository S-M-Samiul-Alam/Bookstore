import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/shared/services/common.service';
import { BookService } from '../book.service';
import { BookEditComponent } from '../book-edit/book-edit.component';

@Component({
   selector: 'app-book-list',
   templateUrl: './book-list.component.html',
   styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  subscription: Subscription = new Subscription;
  BookList: any;
  dataSource: any;

  constructor(
    private router: Router,
    private bookService: BookService,
    public dialog: MatDialog,
    private commonService: CommonService,
  ) { }

  ngOnInit(): void {
    this.getBookList();
  }

  getBookList() {
    this.subscription = this.bookService.getBookList().subscribe(getData => {
      this.BookList = getData;
      this.dataSource = new MatTableDataSource<any>(getData);
      console.log(this.dataSource,'This is the fetched data')
    });
  }
  deleteBookById(rowData: any){
    this.subscription = this.bookService.deleteBookById(rowData).subscribe(()=>{
    });
    window.location.reload();
    this.commonService.showSuccessMsg('Data Successfully Deleted.');
  }

  EditBookById(rowData: any){
    const dialogRef = this.dialog.open(BookEditComponent, {
      width: '700px',
      height: '450px',
      data: rowData,
    });
  }
  displayedColumns: string[] = ['title','author','description', 'publishedYear','action'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

addBook(){
  this.router.navigate(['/book/add']);
}

}
