import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { 

  }
  public addBook(rowData: any){
    return this.http.post(`/books/add`,rowData)
  }
  public getBookList() : Observable<any> {
    return this.http.get(`/books/get/`)
  }
  public getBookById(rowData: any) : Observable<any> {
    return this.http.get(`/books/getBook/`+`${rowData.id}`);
  }
  public deleteBookById(rowData: any) {

    return this.http.delete(`/books/deleteBook/`+`${rowData._id}`);
  }
  public updateBookById(rowData: any, id:any) {
    return this.http.put(`/books/updateBook/`+`${id}`, rowData);
  }
}
