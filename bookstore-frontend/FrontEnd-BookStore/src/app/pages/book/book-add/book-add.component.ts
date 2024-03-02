import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/shared/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  form!: FormGroup;
  formId = "book_info"; 

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private bookService: BookService,
    private commonService: CommonService,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title:  ['', Validators.required],
      author   :  ['', Validators.required],
    description   :  [''],
    publishedYear : [''],
  });
  }

  back(){
    this.router.navigate(['/book']);
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
  onSaveConfirmation(){
    if(this.form.value){
      this.bookService.addBook(this.form.value).subscribe((data)=>{
        this.commonService.showSuccessMsg('Data Successfully Added.');
      })
    }
    this.router.navigate(['/book']);
  }

}
