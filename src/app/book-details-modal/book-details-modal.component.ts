import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BookModel } from '../models/book-model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details-modal',
  templateUrl: './book-details-modal.component.html',
  styleUrls: ['./book-details-modal.component.scss']
})
export class BookDetailsModalComponent implements OnInit {
  book: BookModel;

  constructor(public bsModalRef: BsModalRef, private bookService: BookService) { }

  ngOnInit(): void {
  }
  getBooksPerPage(){}

  delete(book:BookModel){
      this.bookService.deleteBook(book.id)
      .subscribe(() => {
        this.getBooksPerPage();
        this.book = null;
        this.bsModalRef.hide();


      })
    }

}
