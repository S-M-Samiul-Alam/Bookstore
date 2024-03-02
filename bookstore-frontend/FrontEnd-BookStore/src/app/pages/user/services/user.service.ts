import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public addUser(rowData: any){
    return this.http.post(`/books/add`,rowData)
  }
  public getUserList() : Observable<any> {
    return this.http.get(`/user/userInformation/read/`)
  }
  public getUserById(rowData: any) : Observable<any> {
    return this.http.get(`/user/userInformation/readByUserId/`+`${rowData.id}`);
  }
  public deleteUserById(rowData: any) {
    return this.http.delete(`/user/userInformation/deleteByUserId/`+`${rowData.id}`);
  }
  public updateUserById(rowData: any, id:any) {
    return this.http.put(`/user/userInformation/updateByUserId/`+`${id}`, rowData);
  }
}
