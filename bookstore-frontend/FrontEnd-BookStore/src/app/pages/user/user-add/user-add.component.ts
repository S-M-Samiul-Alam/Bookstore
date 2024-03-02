import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  form!: FormGroup;
  formId = "user_info"; 

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private commonService: CommonService,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
    orgCode:  ['', Validators.required],
    companyCode   :  ['', Validators.required],
    fullName   :  ['', Validators.required],
    phoneNumber : ['', Validators.required],
    email   :  ['', Validators.required],
  });
  }

  back(){
    this.router.navigate(['/user']);
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

  onSaveConfirmation(){
    if(this.form.value){
      this.userService.addUser(this.form.value).subscribe((data)=>{
        this.commonService.showSuccessMsg('Data Successfully Added.');
      })
    }
    this.router.navigate(['/user']);
  }

}
