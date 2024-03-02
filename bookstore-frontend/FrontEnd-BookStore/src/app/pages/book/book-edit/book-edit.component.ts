import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from 'src/shared/services/common.service';
import { BookService } from '../book.service';

@Component({
   selector: 'app-book-edit',
   templateUrl: './book-edit.component.html',
   styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  subscription: Subscription = new Subscription;
  BookData: any;
  form!: FormGroup;
  formId = "Book_info"; 

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bookService: BookService,
    private router: Router,
    private fb: FormBuilder,
    private commonService: CommonService,
  ) { }

  ngOnInit(): void {
    this.getBook()
    this.form = this.fb.group({
      title:  ['', Validators.required],
      author   :  ['', Validators.required],
    description   :  [''],
    publishedYear : [''],
    });
  }

  get title() {
    return this.form.get("title");
  }
  get author() {
    return this.form.get("author");
  }
  get description() {
    return this.form.get("description");
  }
  get publishedYear() {
    return this.form.get("publishedYear");
  }

  getBook() {
    this.subscription = this.bookService.getBookById(this.data).subscribe(getData => {
        this.form.patchValue(getData[0]);
    });
  }
  onSaveConfirmation(){
    this.bookService.updateBookById(this.form.value, this.data.id).subscribe((data)=>{
      this.commonService.showSuccessMsg('Data Successfully Updated.');
    })
    window.location.reload();
  }

}
