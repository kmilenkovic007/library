import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
// import { Books } from './mock-books';
import { BookModel } from './models/book-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthorService } from './author.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) { }

  getBooks(currentPage, pageSize, sortName, sortDirection): Observable<BookModel[]>{
    let url = `http://localhost:3333/books?_expand=author&_page=${currentPage}&_limit=${pageSize}`;
    if(sortDirection) {
      url += `&_sort=${sortName}&_order=${sortDirection}`
    }
    return this.http.get<BookModel[]>(url);
// ili koa ja sto sam:
    // if(sortDirection === '') {
    //   return this.http.get<BookModel[]>(`http://localhost:3333/books?_expand=author&_page=${currentPage}&_limit=${pageSize}`);
    // }else{
    //   return this.http.get<BookModel[]>(`http://localhost:3333/books?_expand=author&_page=${currentPage}&_limit=${pageSize}&_sort=${sortName}&_order=${sortDirection}`);
    }
  
  

  getfilteredBooksByAuthor(selectedAuthorId){
    return this.http.get<BookModel []>(`http://localhost:3333/books?_expand=author&authorId=${selectedAuthorId}`)
  }

  addBook(book:BookModel): Observable<BookModel>{
    book = Object.assign({} , book);
    book.author = undefined;
    return this.http.post<BookModel>(`http://localhost:3333/books?_expand=author`, book, this.httpOptions)
  }

  deleteBook(id:number){
    return this.http.delete('http://localhost:3333/books'+'/'+ id, this.httpOptions)
  }

  updateBook(book:BookModel): Observable<BookModel>{
      return this.http.put<BookModel>('http://localhost:3333/books'+'/'+ book.id, book, this.httpOptions);
    }
  }


  


  
    



  






  // getBooks(): Observable<BookModel[]>{
  //   return of(Books);
  // }

