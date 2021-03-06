import { Component } from '@angular/core';
import { AuthorService } from '../author.service';
import { AuthorModel } from '../models/author-model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddAuthorComponent } from '../add-author/add-author.component';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {
  authors = [];
  bsModalRef: BsModalRef;

  constructor(
    private authorService: AuthorService, 
    private modalService: BsModalService) {

    this.getAuthors();
   }

  getAuthors () {
    this.authorService.getAuthors().subscribe(
      authors => this.authors = authors
    );
  }


  addAuthor () {
    const initialState = {
      getAuthors : this.getAuthors.bind(this)
    };
    this.modalService.show(AddAuthorComponent, {initialState});
  }

  delete(author: AuthorModel){
    this.authorService.deleteAuthor(author.id).subscribe(() => { 
      this.getAuthors();
    });
  }
  



  // save(book: BookModel){
  //   if(book.id){
  //     this.bookService.updateBook(book).subscribe(book => {
  //       this.changed.emit();
  //       this.bsModalRef.hide();
  //       })
  //   } else{
  //     this.bookService.addBook(book).subscribe(book => {
  //       this.changed.emit();
  //       this.bsModalRef.hide();
  //       })
}
