import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import { BookModel } from '../models/book-model';
import { BooksComponent } from '../books/books.component';
// import { Books } from '../mock-books';
import { AuthorModel } from '../models/author-model';
import { AuthorService } from '../author.service';
import { BookService } from '../book.service';

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  book = new BookModel({});
  authors:AuthorModel[] = [];
  getBooksPerPage : Function;
  

  // modalRef: BsModalRef | null;

  constructor(
    private modalService: BsModalService, 
    private authorService: AuthorService, 
    public bsModalRef: BsModalRef,
    private bookService: BookService ) {
    this.authorService.getAuthors().subscribe(authors => this.authors = authors);
   }

  ngOnInit(): void {
  }

  save(book: BookModel){
    if(book.id){
      this.bookService.updateBook(book).subscribe(_ => {
        this.getBooksPerPage();
        this.bsModalRef.hide();
      });
    } else{
      this.bookService.addBook(book).subscribe(_ => {
        this.getBooksPerPage();
        this.bsModalRef.hide();
      });
    } 
  }
}

