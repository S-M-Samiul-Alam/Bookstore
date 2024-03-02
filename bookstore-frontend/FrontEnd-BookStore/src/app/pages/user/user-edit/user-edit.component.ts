import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  subscription: Subscription = new Subscription;
  userData: any;
  form!: FormGroup;
  formId = "user_info"; 

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private commonService: CommonService,
  ) { }

  ngOnInit(): void {
    this.getUser()
    this.form = this.fb.group({
      orgCode:  ['', Validators.required],
      companyCode   :  ['', Validators.required],
      fullName   :  ['', Validators.required],
      phoneNumber : ['', Validators.required],
      email   :  ['', Validators.required],
    });
  }

  get orgCode() {
    return this.form.get("orgCode");
  }
  get companyCode() {
    return this.form.get("companyCode");
  }
  get fullName() {
    return this.form.get("fullName");
  }
  get phoneNumber() {
    return this.form.get("phoneNumber");
  }
  get email() {
    return this.form.get("email");
  }

  getUser() {
    this.subscription = this.userService.getUserById(this.data).subscribe(getData => {
        this.form.patchValue(getData[0]);
    });
  }

  onSaveConfirmation(){
    this.userService.updateUserById(this.form.value, this.data.id).subscribe((data)=>{
      this.commonService.showSuccessMsg('Data Successfully Updated.');
    })
    window.location.reload();
  }

}
