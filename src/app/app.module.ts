import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookService } from './book.service';
import { AuthorsComponent } from './authors/authors.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddBookComponent } from './add-book/add-book.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAuthorComponent } from './add-author/add-author.component';
import { BookDetailsModalComponent } from './book-details-modal/book-details-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailsComponent,
    AuthorsComponent,
    AddBookComponent,
    AddAuthorComponent,
    BookDetailsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot()

  ],
  providers: [
    BookService,    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
