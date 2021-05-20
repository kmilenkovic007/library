import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BookModel } from '../models/book-model';
// import { Books } from '../mock-books';
import { AuthorService } from '../author.service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { AddBookComponent } from '../add-book/add-book.component';
import { of, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { BookDetailsModalComponent } from '../book-details-modal/book-details-modal.component';


@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: BookModel [] = [];
  selectedBook?: BookModel;
  sortDirection = '';
  sortName = '';
  copyBooks: BookModel [];
  numOfBooks = 25;
  pageSize = 10;
  currentPage = 1;
  totalPages: number;
  filteredBooks: BookModel[];
  authors = [];
  selectedAuthorId:number;
  bsModalRef: BsModalRef;
  isActiveSearch = false;
  searchValue: string;
  isActiveMenu = false;
  

  

  constructor( 
    private bookService: BookService, 
    private authorService: AuthorService, 
    private modalService: BsModalService) {

    authorService.getAuthors().subscribe(
      authors => this.authors = authors);
      this.chooseSize(this.pageSize);

   }
   
   sort(sortName){
    this.currentPage=1;
    // kada kliknem da radim sort na title recimo, a na drugoj sam strani, on me vraca na prvu stranu i sortira


    //  if (this.sortDirection ===  || this.sortDirection === 1){
    //    this.sortDirection++;
    //  } else {
    //   this.sortDirection = 0;
    // }
    
    // ovaj deo
   
    this.sortName = sortName;
    if (sortName !== this.sortName || this.sortDirection === 'desc') {
      this.sortDirection = '';
    }else if (this.sortDirection === ''){
      this.sortDirection = 'asc'
    } else if (this.sortDirection === 'asc'){
      this.sortDirection = 'desc';
    } else if (this.sortDirection === 'desc'){
      this.sortDirection = '';
    }
    this.getBooksPerPage();
    



    // this.getBooksForTable();
    // this.sortDirection++;
    //ovaj deo
    
//     if (this.sortDirection === 1){
//       this.copyBooks.sort(function (a:BookModel, b:BookModel){
//         if(a.title < b.title) { return -1; }
//         if(a.title > b.title) { return 1; }
//         return 0;
//     })
//   }
//   if (this.sortDirection === 2){
//     this.copyBooks.sort(function (a:BookModel, b:BookModel){
//       if(a.title < b.title) { return 1; }
//       if(a.title > b.title) { return -1; }
//       return 0;
//   })
// }
//ovaj deo
    // if (this.sortDirection > 2){
    //   this.sortDirection = 0;
    // } else {
    //   this.copyBooks.sort((a:BookModel, b:BookModel) => {
    //     if(a[sortName] < b[sortName]) { return this.sortDirection === 1 ? -1 : 1; }
    //     if(a[sortName] > b[sortName]) { return this.sortDirection === 1 ?  1: -1; }
    //     return 0;
    // })
    // }
  //ovaj deo
}

  ngOnInit(){
    this.bookService.getBooks(this.currentPage, this.pageSize, this.sortName, this.sortDirection).subscribe(books => {
      this.books = books.map(book => new BookModel(book));
      // this.copyBooks = [].concat(this.books);
      // this.copyBooks=this.copyBooks.slice(0, this.pageSize);
    });
  }

  onSelect(book: BookModel){
    this.selectedBook = book;
  }

  getBooksPerPage(){
    this.bookService.getBooks(this.currentPage, this.pageSize, this.sortName, this.sortDirection).subscribe(
      books => {
      this.books = books.map(book => new BookModel(book))});
      this.selectedBook = null;
  }

  get pages() {
    console.log(Math.ceil(this.totalPages));
    return Array(Math.ceil(this.totalPages)).fill(Math.ceil(this.totalPages)).map((x,i)=>i+1);
  }

  getCurrentPage(currentPage){
    this.currentPage = currentPage;
    this.getBooksPerPage();

   
    // this.getBooksForTable();
    
    // prvi put kad pominjem metodu ona radi recimo ascending. Ovde ponovo pozivam sort metodu, ali tada se ona povecava za 1 i menja u descending, znaci dobija se pogresan niz, zato smanjimo za 1 sortDirection da bismo vratili na pravo stanje.
    // this.sort(this.sortName);
    // this.copyBooks=this.copyBooks.slice((this.currentPage-1)*this.pageSize, this.currentPage*this.pageSize);
  }

  // getBooksForTable () {
  //   this.selectedBook = null;
  //   this.copyBooks = [...this.books];
  //   if (this.sortDirection > 2){
  //     this.sortDirection = 0;
  //   } else {
  //     this.copyBooks.sort((a:BookModel, b:BookModel) => {
  //       if(a[this.sortName] < b[this.sortName]) { return this.sortDirection === 1 ? -1 : 1; }
  //       if(a[this.sortName] > b[this.sortName]) { return this.sortDirection === 1 ?  1: -1; }
  //       return 0;
  //   })
  //   }
  //   return this.copyBooks=this.copyBooks.slice((this.currentPage-1)*this.pageSize, this.currentPage*this.pageSize);

  // }

  filter(){
    if(this.searchValue){
      this.copyBooks = this.books.filter(book => (book.title.toLowerCase().includes(this.searchValue.toLowerCase())));
    }else{
      this.getCurrentPage(1);
    }
  }

  choose(selectedAuthorId){
    if(this.selectedAuthorId){
      this.bookService.getfilteredBooksByAuthor(this.selectedAuthorId).subscribe(
        books => this.books = books
      )
      // this.copyBooks = this.books.filter(book => book.author.id == selectedAuthor);
    }else{
      this.getCurrentPage(1);
    }
  }

  chooseSize(pageSize){
    this.pageSize = pageSize;
    this.getBooksPerPage();
    this.totalPages = this.numOfBooks / this.pageSize;

    
  }

  openModalWithComponent(book?){
      const initialState = {
        // book : (book) ? new BookModel(book) : new BookModel({})
        // ili
        book : new BookModel(book ? book : {}),
        getBooksPerPage :  this.getBooksPerPage.bind(this)

      }
      
      this.bsModalRef = this.modalService.show(AddBookComponent, {initialState, class: 'modal-lg'});

    }

    openModalForMobile(book){
      const initialState = {
        book : this.selectedBook = book,
        getBooksPerPage :  this.getBooksPerPage.bind(this)
        
      }
      this.bsModalRef = this.modalService.show(BookDetailsModalComponent, {initialState});
      this.bsModalRef.content.closeBtnName = 'Close';

    }
      

    closeSearch(){
      this.isActiveSearch = false;
      this.searchValue ='';
      this.getCurrentPage(1);

    }

    update(book){
      this.bookService.updateBook(book)
    //     .subscribe(() => this.goBack());
    //   }
     

      
    }

    // update(){
    //     this.bookService.updateBook(this.book)
    //     .subscribe(() => this.goBack());
    //   }
    // }
  }
  
    

  



 

  



