import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  subscription: Subscription = new Subscription;
  userList: any;
  dataSource: any;

  constructor(
    private router: Router,
    private userService: UserService,
    public dialog: MatDialog,
    private commonService: CommonService,
  ) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.subscription = this.userService.getUserList().subscribe(getData => {
      this.userList = getData;
      this.dataSource = new MatTableDataSource<any>(getData);
      console.log(this.dataSource,'This is the fetched data')
    });
  }
  deleteUserById(rowData: any){
    this.subscription = this.userService.deleteUserById(rowData).subscribe(()=>{
    });
    window.location.reload();
    this.commonService.showSuccessMsg('Data Successfully Deleted.');
  }

  EditUserById(rowData: any){
    const dialogRef = this.dialog.open(UserEditComponent, {
      width: '700px',
      height: '450px',
      data: rowData,
    });
    
  }

  displayedColumns: string[] = ['orgCode','companyCode','fullName', 'phoneNumber', 'email','action'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

addUser(){
  this.router.navigate(['/user/add']);
}

}
